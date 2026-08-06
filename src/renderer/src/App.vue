<script setup>
/**
 * Root App component | 根组件
 * Provides naive-ui config and router view
 */
import { computed, defineComponent } from 'vue'
import { NConfigProvider, NMessageProvider, NDialogProvider, darkTheme, useMessage, useDialog } from 'naive-ui'
import { isDark } from './stores/theme'

// Naive UI theme based on dark mode | 基于深色模式的 Naive UI 主题
const theme = computed(() => isDark.value ? darkTheme : null)

// Global theme overrides | 全局主题覆盖
const themeOverrides = {
  common: {
    borderRadius: '12px',
    borderRadiusSmall: '8px'
  },
  Dialog: {
    borderRadius: '16px',
    padding: '24px'
  },
  Modal: {
    borderRadius: '16px',
    padding: '24px'
  },
  Card: {
    borderRadius: '16px',
    padding: '24px'
  },
  Button: {
    borderRadiusMedium: '10px',
    borderRadiusSmall: '8px',
    borderRadiusLarge: '12px',
    heightMedium: '36px',
    paddingMedium: '0 16px'
  },
  Input: {
    borderRadius: '10px',
    heightMedium: '36px'
  }
}

// Bridge 组件：在 Provider 内部获取 message/dialog API 并挂载到 window
// | Bridge component: mounts message/dialog APIs to window inside Providers
const NaiveUIBridge = defineComponent({
  name: 'NaiveUIBridge',
  setup() {
    window.$message = useMessage()
    window.$dialog = useDialog()
  },
  render() {
    return null
  }
})
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <NaiveUIBridge />
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
/* Global app styles handled in style.css */
</style>
