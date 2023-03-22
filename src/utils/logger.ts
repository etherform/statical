import { attachConsole, debug, error, info, trace, warn } from 'tauri-plugin-log-api'

export const logger = {
  debug,
  info,
  warn,
  error,
  trace,
  attachConsole,
}
