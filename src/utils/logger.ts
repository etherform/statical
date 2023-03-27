enum LogLevel {
  TRACE = 5,
  DEBUG = 4,
  INFO = 3,
  WARN = 2,
  ERROR = 1,
}

// might add fallback logging later, when app is used outside of tauri
const nativeLogger = reactive({
  debug: async (_msg: string) => {},
  info: async (_msg: string) => {},
  warn: async (_msg: string) => {},
  error: async (_msg: string) => {},
  trace: async (_msg: string) => {},
})

async function log(level: LogLevel, msg: string) {
  const app = useAppStore()
  if (app.tauri && level <= app.tauri.logLevel) {
    switch (level) {
      case LogLevel.TRACE:
        nativeLogger.trace(msg)
        break
      case LogLevel.DEBUG:
        nativeLogger.debug(msg)
        break
      case LogLevel.INFO:
        nativeLogger.info(msg)
        break
      case LogLevel.WARN:
        nativeLogger.warn(msg)
        break
      case LogLevel.ERROR:
        nativeLogger.error(msg)
        break
    }
  }
}

const logger = {
  trace: async (msg: string) => log(LogLevel.TRACE, msg),
  debug: async (msg: string) => log(LogLevel.DEBUG, msg),
  info: async (msg: string) => log(LogLevel.INFO, msg),
  warn: async (msg: string) => log(LogLevel.WARN, msg),
  error: async (msg: string) => log(LogLevel.ERROR, msg),
}

export async function initializeLogger() {
  const app = useAppStore()
  if (app.tauri) {
    const { trace, debug, info, warn, error } = await import('tauri-plugin-log-api')
    nativeLogger.trace = trace
    nativeLogger.debug = debug
    nativeLogger.info = info
    nativeLogger.warn = warn
    nativeLogger.error = error
  }
}
// attachConsole,
export { logger }
