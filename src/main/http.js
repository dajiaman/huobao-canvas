/**
 * Main-process HTTP proxy | 主进程 HTTP 代理
 *
 * 渲染进程通过 IPC 把请求交给主进程执行，避免浏览器 CORS 限制。
 * - http:request      普通请求（invoke/handle，返回完整响应体）
 * - http:stream:start SSE 流式请求（主进程解析 data: 行，逐块回传 content）
 * - http:stream:abort 中止指定流
 */
import { ipcMain } from 'electron'
import log from './logger.js'

// 默认 API 基础地址（相对 url 时使用）| 火山引擎方舟
const DEFAULT_BASE_URL = 'https://ark.cn-beijing.volces.com/api/v3'

// 进行中的流式请求的 AbortController | id -> AbortController
const streamControllers = new Map()

/** 拼接最终请求 URL：绝对 url 原样使用，相对 url 拼接默认基础地址 */
function resolveUrl(url, params) {
  const base = /^https?:\/\//i.test(url) ? url : `${DEFAULT_BASE_URL}${url}`
  const u = new URL(base)
  if (params && typeof params === 'object') {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null) u.searchParams.set(k, String(v))
    }
  }
  return u.toString()
}

/** 注册所有 HTTP 相关的 IPC 处理器 */
export function registerHttpHandlers() {
  // 普通请求
  ipcMain.handle('http:request', async (_event, options = {}) => {
    const { method = 'GET', url = '', headers = {}, data, params } = options
    try {
      const finalUrl = resolveUrl(url, params)
      log.info(`[http:request] ${method.toUpperCase()} ${finalUrl}`)
      const res = await fetch(finalUrl, {
        method: method.toUpperCase(),
        headers,
        body:
          data !== undefined && method.toUpperCase() !== 'GET'
            ? typeof data === 'string'
              ? data
              : JSON.stringify(data)
            : undefined
      })

      const text = await res.text()
      let body
      try {
        body = text ? JSON.parse(text) : null
      } catch {
        body = text
      }

      if (!res.ok) {
        log.warn(`[http:request] ${res.status} ${finalUrl} -> ${text.slice(0, 500)}`)
      } else {
        log.debug(`[http:request] ${res.status} ${finalUrl}`)
      }

      return { ok: res.ok, status: res.status, data: body }
    } catch (err) {
      log.error(`[http:request] failed ${url}: ${err.message}`)
      return { ok: false, status: 0, data: { error: { message: err.message } } }
    }
  })

  // 流式请求（SSE）
  ipcMain.on('http:stream:start', async (event, options = {}) => {
    const { id, url = '', headers = {}, data } = options
    const controller = new AbortController()
    streamControllers.set(id, controller)

    const send = (payload) => {
      if (!event.sender.isDestroyed()) {
        event.sender.send('http:stream:data', { id, ...payload })
      }
    }

    try {
      const finalUrl = resolveUrl(url)
      log.info(`[http:stream] start ${id} ${finalUrl}`)
      const res = await fetch(finalUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify({ ...data, stream: true }),
        signal: controller.signal
      })

      if (!res.ok) {
        const errText = await res.text()
        let msg = errText
        try {
          const parsed = JSON.parse(errText)
          msg = parsed?.error?.message || parsed?.message || errText
        } catch {
          // keep raw text
        }
        log.warn(`[http:stream] ${id} ${res.status} -> ${String(msg).slice(0, 500)}`)
        send({ error: msg || 'Stream request failed' })
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data:')) continue

          const payload = trimmed.slice(5).trim()
          if (payload === '[DONE]') {
            send({ done: true })
            return
          }

          try {
            const parsed = JSON.parse(payload)
            const content = parsed.choices?.[0]?.delta?.content
            if (content) send({ chunk: content })
          } catch {
            // 跳过无效 JSON
          }
        }
      }

      send({ done: true })
    } catch (err) {
      if (err.name === 'AbortError') {
        log.info(`[http:stream] ${id} aborted`)
        send({ done: true, aborted: true })
      } else {
        log.error(`[http:stream] ${id} failed: ${err.message}`)
        send({ error: err.message })
      }
    } finally {
      streamControllers.delete(id)
    }
  })

  // 中止流式请求
  ipcMain.on('http:stream:abort', (_event, id) => {
    const controller = streamControllers.get(id)
    if (controller) {
      controller.abort()
      streamControllers.delete(id)
    }
  })
}
