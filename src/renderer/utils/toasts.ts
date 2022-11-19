import { ElMessage } from 'element-plus/es'
import { ElNotification } from 'element-plus/es'

export const toast = {
  success: (message: string, duration?: number) => ElMessage.success({ message, duration: duration ?? 3000 }),
  info: (message: string, duration?: number) => ElMessage.info({ message, duration: duration ?? 3000 }),
  warn: (message: string, duration?: number) => ElMessage.warning({ message, duration: duration ?? 5000 }),
  error: (message: string, duration?: number) => ElMessage.error({ message, duration: duration ?? 5000 }),
}

export const notify = {
  success: (title: string, message: string, duration?: number) => ElNotification.success({ title, message, duration: duration ?? 3000, type: 'success' }),
  info: (title: string, message: string, duration?: number) => ElNotification.success({ title, message, duration: duration ?? 3000, type: 'info' }),
  warn: (title: string, message: string, duration?: number) => ElNotification.success({ title, message, duration: duration ?? 4500, type: 'warning' }),
  error: (title: string, message: string, duration?: number) => ElNotification.success({ title, message, duration: duration ?? 4500, type: 'error'}),
}
