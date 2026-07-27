/**
 * Chat API | 对话 API
 */

import { request, getBaseUrl } from "@renderer/utils";

// 对话补全
export const chatCompletions = (data) =>
  request({
    url: `/chat/completions`,
    method: "post",
    data,
  });

/** 读取当前渠道的 API Key */
const getApiKey = () => {
  try {
    const provider = localStorage.getItem("api-provider") || "volcengine";
    const apiKeysJson = localStorage.getItem("api-keys-by-provider");
    const apiKeys = apiKeysJson ? JSON.parse(apiKeysJson) : {};
    return apiKeys[provider] || localStorage.getItem("apiKey") || "";
  } catch {
    return localStorage.getItem("apiKey") || "";
  }
};

// 流式对话补全 | 通过主进程 IPC 代理，规避 CORS
export const streamChatCompletions = async function* (
  data,
  signal,
  options = {},
) {
  if (!window.api?.httpStream) {
    throw new Error("当前环境不支持流式请求（需在 Electron 中运行）");
  }

  const apiKey = getApiKey();
  const baseUrl = options.baseUrl || getBaseUrl();
  const endpoint = options.endpoint || "/chat/completions";
  const url = /^https?:\/\//i.test(endpoint) ? endpoint : `${baseUrl}${endpoint}`;

  // 回调转 async generator | 用队列 + Promise 桥接 IPC 事件
  const queue = [];
  let resolveNext = null;
  let streamError = null;

  const push = (item) => {
    if (resolveNext) {
      resolveNext(item);
      resolveNext = null;
    } else {
      queue.push(item);
    }
  };

  const abort = window.api.httpStream(
    {
      url,
      headers: { Authorization: `Bearer ${apiKey}` },
      data,
    },
    (payload) => {
      if (payload.error) {
        streamError = new Error(payload.error);
        push({ type: "error" });
      } else if (payload.done) {
        push({ type: "done" });
      } else if (payload.chunk) {
        push({ type: "chunk", value: payload.chunk });
      }
    },
  );

  if (signal) {
    signal.addEventListener("abort", () => abort(), { once: true });
  }

  try {
    while (true) {
      const item = queue.length
        ? queue.shift()
        : await new Promise((resolve) => {
          resolveNext = resolve;
        });

      if (item.type === "chunk") {
        yield item.value;
      } else if (item.type === "done") {
        return;
      } else if (item.type === "error") {
        throw streamError;
      }
    }
  } finally {
    abort();
  }
};
