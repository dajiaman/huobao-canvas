/**
 * Main entry point | 主入口
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// 捕获渲染进程未处理异常
window.addEventListener('error', (e) => {
  console.error('[renderer] uncaught error:', e.message, e.filename, e.lineno)
})
window.addEventListener('unhandledrejection', (e) => {
  console.error('[renderer] unhandled rejection:', e.reason)
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
