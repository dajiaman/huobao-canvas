/**
 * HTTP Request Utility | HTTP 请求工具
 * Electron 版：通过主进程 IPC 代理请求，规避浏览器 CORS 限制。
 * 保持与原 axios 封装一致的调用签名：request({ url, method, data, params, headers })
 * 成功返回响应体，失败弹出提示并 reject。
 */

// 默认 API 基础地址 | 火山引擎方舟
const DEFAULT_BASE_URL = 'https://ark.cn-beijing.volces.com/api/v3'

// 当前基础地址（相对 url 时拼接使用）
let currentBaseUrl = DEFAULT_BASE_URL

// 不需要鉴权的端点
const NO_AUTH_ENDPOINTS = ['/model/page', '/model/fullName', '/model/types']

/** 读取当前渠道的 API Key */
const getApiKey = () => {
  try {
    const provider = localStorage.getItem('api-provider') || 'volcengine'
    const apiKeysJson = localStorage.getItem('api-keys-by-provider')
    const apiKeys = apiKeysJson ? JSON.parse(apiKeysJson) : {}
    return apiKeys[provider] || ''
  } catch {
    return ''
  }
}

/** 拼接绝对 url */
const resolveUrl = (url = '') => {
  if (/^https?:\/\//i.test(url)) return url
  return `${currentBaseUrl}${url}`
}

/**
 * 统一请求方法 | 通过 electronAPI.httpRequest 走主进程
 * @param {{ url, method?, data?, params?, headers? }} config
 * @returns {Promise<any>} 响应体
 */
export const request = async (config = {}) => {
  const { url = '', method = 'get', data, params, headers = {} } = config

  if (!window.api?.httpRequest) {
    const msg = '网络请求错误'
    window.$message?.error(msg)
    return Promise.reject(new Error(msg))
  }

  const finalUrl = resolveUrl(url)
  const finalHeaders = { 'Content-Type': 'application/json', ...headers }

  // 注入鉴权头
  const isNoAuth = NO_AUTH_ENDPOINTS.some((ep) => finalUrl.includes(ep))
  const apiKey = getApiKey()
  if (apiKey && !isNoAuth) {
    finalHeaders['Authorization'] = `Bearer ${apiKey}`
  }

  console.log(
    `[request] request before: ${method.toUpperCase()} ${finalUrl} -> ${JSON.stringify(data)} -> ${JSON.stringify(params)}`
  )

  let res
  try {
    res = await window.api.httpRequest({
      method,
      url: finalUrl,
      headers: finalHeaders,
      data,
      params
    })
  } catch (err) {
    const msg = err.message || '网络请求错误'
    console.error(`[request] IPC error: ${msg}`)
    window.$message?.error(msg)
    return Promise.reject(err)
  }

  console.log(`[request] result: ${method.toUpperCase()} ${finalUrl} -> ${res.status}`, res.data)
  // 成功
  if (res.ok && res.status >= 200 && res.status < 300) {
    return res.data
  }

  // 失败处理
  const body = res.data || {}
  const message = body?.error?.message || body?.message || '请求失败'
  if (res.status === 401) {
    window.$message?.error('API Key 无效或已过期')
  } else if (res.status === 429) {
    window.$message?.error('请求过于频繁，请稍后再试')
  } else {
    window.$message?.error(message)
  }

  return Promise.reject(body)
}

/**
 * Set API base URL | 设置 API 基础 URL
 */
export const setBaseUrl = (url) => {
  if (url) currentBaseUrl = url
}

/**
 * Get current base URL | 获取当前基础 URL
 */
export const getBaseUrl = () => currentBaseUrl

export default request
