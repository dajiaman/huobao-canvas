/**
 * 预加载脚本 | Preload script
 * 通过 contextBridge 暴露受限的 HTTP 能力给渲染进程
 */
import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// 生成唯一请求 id
let seq = 0;
const genId = () => `req_${Date.now()}_${seq++}`;

const api = {
  /**
   * 普通 HTTP 请求 | 返回 { ok, status, data }
   * @param {{ method?, url, headers?, data?, params? }} options
   */
  httpRequest: (options) => ipcRenderer.invoke("http:request", options),

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
        ipcRenderer.removeListener("http:stream:data", listener);
      }
    };
    ipcRenderer.on("http:stream:data", listener);
    ipcRenderer.send("http:stream:start", { id, ...options });

    return () => {
      ipcRenderer.send("http:stream:abort", id);
      ipcRenderer.removeListener("http:stream:data", listener);
    };
  },


  /** 设置主题 | Set theme
   * @param {'light' | 'dark'} theme
   */
  setTheme: (theme) => ipcRenderer.send("set-theme", theme),
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
