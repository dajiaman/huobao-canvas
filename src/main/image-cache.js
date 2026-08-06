/**
 * 图片本地缓存模块 | Image local cache module
 *
 * 将远程临时图片下载到本地，返回 file:// URL，
 * 避免图片 URL 过期后无法显示。
 */
import { app, ipcMain } from 'electron'
import path from 'path'
import { pathToFileURL } from 'url'
import fs from 'fs'
import crypto from 'crypto'
import log from './logger.js'

// 缓存根目录：userData/cache/images
let cacheDir = ''

/**
 * 初始化缓存目录
 */
export function initImageCache() {
  cacheDir = path.join(app.getPath('userData'), 'cache', 'images')
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }
  log.info(`[image-cache] cache dir: ${cacheDir}`)

  // 注册 IPC：下载并缓存图片
  ipcMain.handle('image:cache', async (_event, imageUrl) => {
    return cacheImage(imageUrl)
  })
}

/**
 * 从 Content-Type 推断扩展名 | Infer extension from Content-Type
 */
function inferExtension(contentType, url) {
  const mimeToExt = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/bmp': '.bmp',
    'image/svg+xml': '.svg'
  }

  // 1. 优先从 Content-Type 推断
  if (contentType && mimeToExt[contentType.toLowerCase()]) {
    return mimeToExt[contentType.toLowerCase()]
  }

  // 2. 从 URL 路径提取扩展名（去掉 query string）
  try {
    const urlPath = new URL(url).pathname
    const ext = path.extname(urlPath).toLowerCase()
    if (ext && ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp', '.svg'].includes(ext)) {
      return ext === '.jpeg' ? '.jpg' : ext
    }
  } catch {
    // URL 解析失败，忽略
  }

  // 3. 默认 png
  return '.png'
}

/**
 * 下载远程图片到本地缓存 | Download remote image to local cache
 * @param {string} imageUrl - 远程图片 URL（http/https）
 * @returns {Promise<string>} file:///绝对路径 格式的本地 URL
 */
export async function cacheImage(imageUrl) {
  // data URL 或 file:// URL 不需要缓存
  if (!imageUrl || typeof imageUrl !== 'string') {
    return imageUrl
  }
  if (imageUrl.startsWith('data:') || imageUrl.startsWith('file:')) {
    return imageUrl
  }
  if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
    return imageUrl
  }

  try {
    // 用 URL 的 hash 作为文件名，避免重复下载
    const hash = crypto
      .createHash('md5')
      .update(imageUrl)
      .digest('hex')
      .slice(0, 16)

    const res = await fetch(imageUrl)
    if (!res.ok) {
      throw new Error(`下载图片失败: ${res.status}`)
    }

    const contentType = res.headers.get('content-type') || ''
    const ext = inferExtension(contentType, imageUrl)
    const fileName = `${hash}${ext}`
    const filePath = path.join(cacheDir, fileName)

    // 如果文件已存在（之前下载过），直接返回
    if (fs.existsSync(filePath)) {
      log.debug(`[image-cache] hit cache: ${fileName}`)
      return pathToFileURL(filePath).href
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(filePath, buffer)
    log.info(`[image-cache] cached: ${fileName} (${(buffer.length / 1024).toFixed(1)}KB)`)

    return pathToFileURL(filePath).href
  } catch (err) {
    log.error(`[image-cache] failed to cache ${imageUrl}: ${err.message}`)
    // 缓存失败时返回原始 URL，不影响显示
    return imageUrl
  }
}
