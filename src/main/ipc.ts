import { ipcMain } from 'electron'
import type { MainContext } from '@/index'
import { rendererLogger } from '@/logger'
import { css } from '@/css'
import { ipcEvents } from '#/ipc'

/* renderer logger */

export const ipcMainSetup = async (ctx: MainContext) => {
  ipcMain.handle(ipcEvents.INSERT_CSS_RESET, (_event, ..._args) => {
    ctx.mainWindow?.webContents.insertCSS(css)
  })

  ipcMain.handle(ipcEvents.LOGGER_DEBUG, (_event, ...args) => {
    rendererLogger.debug.apply(null, args as never)
  })
  ipcMain.handle(ipcEvents.LOGGER_INFO, (_event, ...args) => {
    rendererLogger.info.apply(null, args as never)
  })
  ipcMain.handle(ipcEvents.LOGGER_WARN, (_event, ...args) => {
    rendererLogger.warn.apply(null, args as never)
  })
  ipcMain.handle(ipcEvents.LOGGER_ERROR, (_event, ...args) => {
    rendererLogger.error.apply(null, args as never)
  })
}
