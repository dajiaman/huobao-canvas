/**
 * Theme store | 主题状态管理
 * Handles dark/light mode switching
 */
import { ref, watch } from 'vue'

// Get initial theme from localStorage, default to dark | 从本地存储获取初始主题，默认暗色
const getInitialTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return true
}

export const isDark = ref(getInitialTheme())

// Watch and apply theme changes | 监听并应用主题变化
watch(
  isDark,
  (value) => {
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')

    // 发到主进程
    window.api?.setTheme(value ? 'dark' : 'light')
  },
  { immediate: true }
)

// Toggle theme | 切换主题
export const toggleTheme = () => {
  isDark.value = !isDark.value
}
