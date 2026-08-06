/**
 * Electron 主进程入口 | Main process entry
 */
import { app, shell, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import path, { join } from 'path'
import { registerHttpHandlers } from './http.js'
import { optimizer, is } from '@electron-toolkit/utils'
import log from './logger.js'
import icon from '../../resources/icon.png?asset'
import { initImageCache } from './image-cache.js'

let mainWindow = null

// 单实例锁：只允许开启一个窗口
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    // 当第二个实例启动时，聚焦已有窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
      mainWindow.show()
    }
  })
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 640,
    show: false,
    autoHideMenuBar: true,
    icon: icon,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      webSecurity: false,
      nodeIntegration: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    if (is.dev) {
      mainWindow.webContents.openDevTools({
        mode: 'detach'
      })
    }
  })

  // 外部链接用系统浏览器打开
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  // 渲染进程加载失败 / crash 时记录日志，便于排查白屏问题
  mainWindow.webContents.on('did-fail-load', (_e, code, desc, url) => {
    log.error(`[window] did-fail-load: ${code} ${desc} ${url}`)
  })
  mainWindow.webContents.on('render-process-gone', (_e, details) => {
    log.error(`[window] render-process-gone: ${details.reason}`)
  })

  // 开发环境加载 dev server，生产环境加载打包后的 index.html
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    log.info(`[window] load dev server: ${process.env['ELECTRON_RENDERER_URL']}`)
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    const indexHtml = path.join(__dirname, '../renderer/index.html')
    log.info(`[window] load file: ${indexHtml}`)
    mainWindow.loadFile(indexHtml)
  }
}

app.whenReady().then(() => {
  log.info(
    `[app] ready, version=${app.getVersion()}, log dir=${log.transports.file.getFile().path}`
  )
  registerHttpHandlers()

  // 初始化图片缓存
  initImageCache()

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => log.debug('[ipc] pong'))

  ipcMain.on('set-theme', (_event, theme) => {
    log.info(`[ipc] set-theme: ${theme}`)

    // electron 设置主题
    if (theme === 'dark') {
      nativeTheme.themeSource = 'dark'
    } else {
      nativeTheme.themeSource = 'light'
    }
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  log.info('[app] window-all-closed')
  if (process.platform !== 'darwin') app.quit()
})
