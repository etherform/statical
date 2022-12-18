import { ElMessage, ElNotification } from 'element-plus/es'

export const toast = {
  success: (message: string, duration?: number) =>
    ElMessage.success({ message, duration: duration ?? 3000, offset: 50 }),

  info: (message: string, duration?: number) =>
    ElMessage.info({ message, duration: duration ?? 3000, offset: 50 }),

  warn: (message: string, duration?: number) =>
    ElMessage.warning({ message, duration: duration ?? 5000, offset: 50 }),

  error: (message: string, duration?: number) =>
    ElMessage.error({ message, duration: duration ?? 5000, offset: 50 }),
  debug: (message: string, duration?: number) => {
    if (import.meta.env.DEV)
      ElMessage.info({ message, duration: duration ?? 3000, offset: 50 })
  },
}

export const notify = {
  success: (title: string, message: string, duration?: number) =>
    ElNotification.success({ title, message, duration: duration ?? 3000, type: 'success' }),

  info: (title: string, message: string, duration?: number) =>
    ElNotification.success({ title, message, duration: duration ?? 3000, type: 'info' }),

  warn: (title: string, message: string, duration?: number) =>
    ElNotification.success({ title, message, duration: duration ?? 4500, type: 'warning' }),

  error: (title: string, message: string, duration?: number) =>
    ElNotification.success({ title, message, duration: duration ?? 4500, type: 'error' }),
}
