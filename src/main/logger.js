/**
 * 统一日志模块 | Unified logger (electron-log v5)
 *
 * 日志文件位置 | Log file location:
 * - Windows: %USERPROFILE%\AppData\Roaming\{appName}\logs\main.log
 * - macOS:   ~/Library/Logs/{appName}/main.log
 * - Linux:   ~/.config/{appName}/logs/main.log
 */
import log from 'electron-log'
import { is } from '@electron-toolkit/utils'

// 开启后渲染进程可通过 electron-log/renderer 写入同一份日志
log.initialize()

// 控制台输出级别：开发环境全量，生产环境只记录 info 及以上
log.transports.console.level = is.dev ? 'debug' : 'info'

// 文件输出级别 & 日志格式
log.transports.file.level = 'info'
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}'

// 单个日志文件上限 5MB，超出后自动轮转
log.transports.file.maxSize = 5 * 1024 * 1024

// 捕获主进程未处理异常 & Promise rejection
log.errorHandler.startCatching({ showDialog: false })

export default log
