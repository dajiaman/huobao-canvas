"use strict";
const electron = require("electron");
const path = require("path");
const log = require("electron-log");
const utils = require("@electron-toolkit/utils");
const url = require("url");
const fs = require("fs");
const crypto = require("crypto");
log.initialize();
log.transports.console.level = utils.is.dev ? "debug" : "info";
log.transports.file.level = "info";
log.transports.file.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}";
log.transports.file.maxSize = 5 * 1024 * 1024;
log.errorHandler.startCatching({ showDialog: false });
const DEFAULT_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const streamControllers = /* @__PURE__ */ new Map();
function resolveUrl(url2, params) {
  const base = /^https?:\/\//i.test(url2) ? url2 : `${DEFAULT_BASE_URL}${url2}`;
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
    const { method = "GET", url: url2 = "", headers = {}, data, params } = options;
    try {
      const finalUrl = resolveUrl(url2, params);
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
      log.error(`[http:request] failed ${url2}: ${err.message}`);
      return { ok: false, status: 0, data: { error: { message: err.message } } };
    }
  });
  electron.ipcMain.on("http:stream:start", async (event, options = {}) => {
    const { id, url: url2 = "", headers = {}, data } = options;
    const controller = new AbortController();
    streamControllers.set(id, controller);
    const send = (payload) => {
      if (!event.sender.isDestroyed()) {
        event.sender.send("http:stream:data", { id, ...payload });
      }
    };
    try {
      const finalUrl = resolveUrl(url2);
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
let cacheDir = "";
function initImageCache() {
  cacheDir = path.join(electron.app.getPath("userData"), "cache", "images");
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  log.info(`[image-cache] cache dir: ${cacheDir}`);
  electron.ipcMain.handle("image:cache", async (_event, imageUrl) => {
    return cacheImage(imageUrl);
  });
}
function inferExtension(contentType, url2) {
  const mimeToExt = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/bmp": ".bmp",
    "image/svg+xml": ".svg"
  };
  if (contentType && mimeToExt[contentType.toLowerCase()]) {
    return mimeToExt[contentType.toLowerCase()];
  }
  try {
    const urlPath = new URL(url2).pathname;
    const ext = path.extname(urlPath).toLowerCase();
    if (ext && [".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".svg"].includes(ext)) {
      return ext === ".jpeg" ? ".jpg" : ext;
    }
  } catch {
  }
  return ".png";
}
async function cacheImage(imageUrl) {
  if (!imageUrl || typeof imageUrl !== "string") {
    return imageUrl;
  }
  if (imageUrl.startsWith("data:") || imageUrl.startsWith("file:")) {
    return imageUrl;
  }
  if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  try {
    const hash = crypto.createHash("md5").update(imageUrl).digest("hex").slice(0, 16);
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`下载图片失败: ${res.status}`);
    }
    const contentType = res.headers.get("content-type") || "";
    const ext = inferExtension(contentType, imageUrl);
    const fileName = `${hash}${ext}`;
    const filePath = path.join(cacheDir, fileName);
    if (fs.existsSync(filePath)) {
      log.debug(`[image-cache] hit cache: ${fileName}`);
      return url.pathToFileURL(filePath).href;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    log.info(`[image-cache] cached: ${fileName} (${(buffer.length / 1024).toFixed(1)}KB)`);
    return url.pathToFileURL(filePath).href;
  } catch (err) {
    log.error(`[image-cache] failed to cache ${imageUrl}: ${err.message}`);
    return imageUrl;
  }
}
let mainWindow = null;
const gotTheLock = electron.app.requestSingleInstanceLock();
if (!gotTheLock) {
  electron.app.quit();
} else {
  electron.app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
      mainWindow.show();
    }
  });
}
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
      webSecurity: false,
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
  mainWindow.webContents.setWindowOpenHandler(({ url: url2 }) => {
    electron.shell.openExternal(url2);
    return { action: "deny" };
  });
  mainWindow.webContents.on("did-fail-load", (_e, code, desc, url2) => {
    log.error(`[window] did-fail-load: ${code} ${desc} ${url2}`);
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
  initImageCache();
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
