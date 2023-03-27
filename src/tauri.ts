import { invoke } from '@tauri-apps/api/tauri'

declare global {
  interface Window {
    __TAURI__: {} | undefined
  }
}

export function getLogLevel() {
  return invoke<number>('get_log_level')
}
