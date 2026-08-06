"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
let seq = 0;
const genId = () => `req_${Date.now()}_${seq++}`;
const api = {
  /**
   * 普通 HTTP 请求 | 返回 { ok, status, data }
   * @param {{ method?, url, headers?, data?, params? }} options
   */
  httpRequest: (options) => electron.ipcRenderer.invoke("http:request", options),
  /**
   * SSE 流式请求 | 通过回调逐块返回
   * @param {{ url, headers?, data? }} options
   * @param {(payload: { chunk?, done?, error?, aborted? }) => void} onData
   * @returns {() => void} 中止函数
   */
  httpStream: (options, onData) => {
    const id = genId();
    const listener = (_event, payload) => {
      if (payload.id !== id) return;
      onData(payload);
      if (payload.done || payload.error) {
        electron.ipcRenderer.removeListener("http:stream:data", listener);
      }
    };
    electron.ipcRenderer.on("http:stream:data", listener);
    electron.ipcRenderer.send("http:stream:start", { id, ...options });
    return () => {
      electron.ipcRenderer.send("http:stream:abort", id);
      electron.ipcRenderer.removeListener("http:stream:data", listener);
    };
  },
  /** 设置主题 | Set theme
   * @param {'light' | 'dark'} theme
   */
  setTheme: (theme) => electron.ipcRenderer.send("set-theme", theme),
  /**
   * 缓存远程图片到本地 | Cache remote image to local
   * @param {string} imageUrl - 远程图片 URL
   * @returns {Promise<string>} cache://images/xxx.png 格式的本地 URL
   */
  cacheImage: (imageUrl) => electron.ipcRenderer.invoke("image:cache", imageUrl)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
