import { contextBridge, ipcRenderer } from 'electron'
import { Color, Titlebar } from 'custom-electron-titlebar'
import type TitlebarClass from 'custom-electron-titlebar/dist/titlebar'
import { domReady } from '&/utils'
import { useLoadingAnimation } from '&/animation'
import { ipcEvents } from '#/ipc'

let titlebar: TitlebarClass

/* some fancy loading animation */
const { startLoadingAnimation, finishLoadingAnimation } = useLoadingAnimation()

domReady().then(async () => {
  await ipcRenderer.invoke(ipcEvents.INSERT_CSS_RESET)

  titlebar = new Titlebar({
    backgroundColor: Color.fromHex('#24292E'),
    itemBackgroundColor: Color.fromHex('#24292E'),
    // menu: null // = do not automatically use Menu.applicationMenu
  })
  titlebar.updateTitle('Statical')

  startLoadingAnimation()
}).then(() => setTimeout(finishLoadingAnimation, 15000))

/* titlebar api */
const titlebarAPI = {
  setTitle: (s: string) => {
    if (titlebar)
      titlebar.updateTitle(s)
  },
}

contextBridge.exposeInMainWorld('titlebar', titlebarAPI)

/* renderer logger */
const loggerAPI = {
  debug: (...args: unknown[]): Promise<void> => ipcRenderer.invoke(ipcEvents.LOGGER_DEBUG, ...args),
  info: (...args: unknown[]): Promise<void> => ipcRenderer.invoke(ipcEvents.LOGGER_INFO, ...args),
  warn: (...args: unknown[]): Promise<void> => ipcRenderer.invoke(ipcEvents.LOGGER_WARN, ...args),
  error: (...args: unknown[]): Promise<void> => ipcRenderer.invoke(ipcEvents.LOGGER_ERROR, ...args),
}

contextBridge.exposeInMainWorld('logger', loggerAPI)

/* windows api */
const api = {
  startLoadingAnimation,
  finishLoadingAnimation,
}

contextBridge.exposeInMainWorld('api', api)

export interface WindowAPI {
  api: typeof api
  titlebar: typeof titlebarAPI
  logger: typeof loggerAPI
}
