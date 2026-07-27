"use strict";
const electron = require("electron");
const path = require("path");
require("url");
const log = require("electron-log");
const utils = require("@electron-toolkit/utils");
log.initialize();
log.transports.console.level = utils.is.dev ? "debug" : "info";
log.transports.file.level = "info";
log.transports.file.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}";
log.transports.file.maxSize = 5 * 1024 * 1024;
log.errorHandler.startCatching({ showDialog: false });
const DEFAULT_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const streamControllers = /* @__PURE__ */ new Map();
function resolveUrl(url, params) {
  const base = /^https?:\/\//i.test(url) ? url : `${DEFAULT_BASE_URL}${url}`;
  const u = new URL(base);
  if (params && typeof params === "object") {
    for (const [k, v] of Object.entries(params)) {
      if (v !== void 0 && v !== null) u.searchParams.set(k, String(v));
    }
  }
  return u.toString();
}
function registerHttpHandlers() {
  electron.ipcMain.handle("http:request", async (_event, options = {}) => {
    const { method = "GET", url = "", headers = {}, data, params } = options;
    try {
      const finalUrl = resolveUrl(url, params);
      log.info(`[http:request] ${method.toUpperCase()} ${finalUrl}`);
      const res = await fetch(finalUrl, {
        method: method.toUpperCase(),
        headers,
        body: data !== void 0 && method.toUpperCase() !== "GET" ? typeof data === "string" ? data : JSON.stringify(data) : void 0
      });
      const text = await res.text();
      let body;
      try {
        body = text ? JSON.parse(text) : null;
      } catch {
        body = text;
      }
      if (!res.ok) {
        log.warn(`[http:request] ${res.status} ${finalUrl} -> ${text.slice(0, 500)}`);
      } else {
        log.debug(`[http:request] ${res.status} ${finalUrl}`);
      }
      return { ok: res.ok, status: res.status, data: body };
    } catch (err) {
      log.error(`[http:request] failed ${url}: ${err.message}`);
      return { ok: false, status: 0, data: { error: { message: err.message } } };
    }
  });
  electron.ipcMain.on("http:stream:start", async (event, options = {}) => {
    const { id, url = "", headers = {}, data } = options;
    const controller = new AbortController();
    streamControllers.set(id, controller);
    const send = (payload) => {
      if (!event.sender.isDestroyed()) {
        event.sender.send("http:stream:data", { id, ...payload });
      }
    };
    try {
      const finalUrl = resolveUrl(url);
      log.info(`[http:stream] start ${id} ${finalUrl}`);
      const res = await fetch(finalUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify({ ...data, stream: true }),
        signal: controller.signal
      });
      if (!res.ok) {
        const errText = await res.text();
        let msg = errText;
        try {
          const parsed = JSON.parse(errText);
          msg = parsed?.error?.message || parsed?.message || errText;
        } catch {
        }
        log.warn(`[http:stream] ${id} ${res.status} -> ${String(msg).slice(0, 500)}`);
        send({ error: msg || "Stream request failed" });
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (payload === "[DONE]") {
            send({ done: true });
            return;
          }
          try {
            const parsed = JSON.parse(payload);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) send({ chunk: content });
          } catch {
          }
        }
      }
      send({ done: true });
    } catch (err) {
      if (err.name === "AbortError") {
        log.info(`[http:stream] ${id} aborted`);
        send({ done: true, aborted: true });
      } else {
        log.error(`[http:stream] ${id} failed: ${err.message}`);
        send({ error: err.message });
      }
    } finally {
      streamControllers.delete(id);
    }
  });
  electron.ipcMain.on("http:stream:abort", (_event, id) => {
    const controller = streamControllers.get(id);
    if (controller) {
      controller.abort();
      streamControllers.delete(id);
    }
  });
}
const icon = path.join(__dirname, "../../resources/icon.png");
let mainWindow = null;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 640,
    show: false,
    autoHideMenuBar: true,
    icon,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
    if (utils.is.dev) {
      mainWindow.webContents.openDevTools({
        mode: "detach"
      });
    }
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    electron.shell.openExternal(url);
    return { action: "deny" };
  });
  mainWindow.webContents.on("did-fail-load", (_e, code, desc, url) => {
    log.error(`[window] did-fail-load: ${code} ${desc} ${url}`);
  });
  mainWindow.webContents.on("render-process-gone", (_e, details) => {
    log.error(`[window] render-process-gone: ${details.reason}`);
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    log.info(`[window] load dev server: ${process.env["ELECTRON_RENDERER_URL"]}`);
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    const indexHtml = path.join(__dirname, "../renderer/index.html");
    log.info(`[window] load file: ${indexHtml}`);
    mainWindow.loadFile(indexHtml);
  }
}
electron.app.whenReady().then(() => {
  log.info(
    `[app] ready, version=${electron.app.getVersion()}, log dir=${log.transports.file.getFile().path}`
  );
  registerHttpHandlers();
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  electron.ipcMain.on("ping", () => log.debug("[ipc] pong"));
  electron.ipcMain.on("set-theme", (_event, theme) => {
    log.info(`[ipc] set-theme: ${theme}`);
    if (theme === "dark") {
      electron.nativeTheme.themeSource = "dark";
    } else {
      electron.nativeTheme.themeSource = "light";
    }
  });
  createWindow();
  electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  log.info("[app] window-all-closed");
  if (process.platform !== "darwin") electron.app.quit();
});
