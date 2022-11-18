import { ElMessage } from 'element-plus/es'

export const toast = {
  success: (message: string, duration?: number) => ElMessage.success({ message, duration: duration ?? 3000 }),
  info: (message: string, duration?: number) => ElMessage.info({ message, duration: duration ?? 3000 }),
  warn: (message: string, duration?: number) => ElMessage.warning({ message, duration: duration ?? 5000 }),
  error: (message: string, duration?: number) => ElMessage.error({ message, duration: duration ?? 5000 }),
}
