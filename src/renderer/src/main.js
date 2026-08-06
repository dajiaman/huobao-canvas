/**
 * Main entry point | 主入口
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// 捕获渲染进程未处理异常 | Catch unhandled renderer errors
window.addEventListener('error', (e) => {
  console.error('[renderer] uncaught error:', e.message, e.filename, e.lineno)
  window.$message?.error(`运行错误: ${e.message}`)
})
window.addEventListener('unhandledrejection', (e) => {
  const msg = e.reason?.message || String(e.reason)
  console.error('[renderer] unhandled rejection:', e.reason)
  window.$message?.error(`未处理异常: ${msg}`)
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
