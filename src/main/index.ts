/* import { release } from 'os' */
import { resolve } from 'path'
import { type BrowserWindow, app, shell } from 'electron'
import { attachTitlebarToWindow } from 'custom-electron-titlebar/main'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { ipcMainSetup } from '@/ipc'
import { createWindow } from '@/window'
import { logger } from '@/logger'

export interface MainContext {
  mainWindow?: BrowserWindow
}

// Disable GPU Acceleration for Windows 7
/* if (release().startsWith('6.1')) */
app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32')
  app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

export const ctx: MainContext = {}

const devUrl = process.env.VITE_DEV_SERVER_URL
const indexHtml = resolve(__dirname, '../renderer/index.html')
const preload = resolve(__dirname, '../preload/index.js')
const title = 'Statical'
const width = 1280
const height = 720
const icon = resolve(__dirname, '../renderer/favicon.ico')

// eslint-disable-next-line max-len
logger.debug(`Creating electron window(title: ${title}, width: ${width}, height: ${height}, icon: ${icon}, preload: ${preload}, url: ${app.isPackaged ? indexHtml : devUrl})`)

app.whenReady()
  .then(() => createWindow(title, width, height, icon, preload))
  .then(
    (win) => {
      attachTitlebarToWindow(win)
      win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:'))
          shell.openExternal(url)
        return { action: 'deny' }
      })

      if (!app.isPackaged && devUrl) {
        win.loadURL(devUrl)
        win.webContents.openDevTools()
      }
      else {
        win.loadFile(indexHtml)
      }

      ctx.mainWindow = win
    },
    (err: any) => {
      logger.error(`Failed to create window: ${JSON.stringify(err)}`)
    },
  )
  .then(() => ipcMainSetup(ctx))
  .then(() => installExtension(VUEJS_DEVTOOLS))

app.on('window-all-closed', () => {
  ctx.mainWindow = undefined
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('second-instance', () => {
  if (ctx.mainWindow) {
    // Focus on the main window if the user tried to open another
    if (ctx.mainWindow.isMinimized())
      ctx.mainWindow.restore()

    ctx.mainWindow.focus()
  }
})
