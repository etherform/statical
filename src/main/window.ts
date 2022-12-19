import { setupTitlebar } from 'custom-electron-titlebar/main'
import { BrowserWindow } from 'electron'

setupTitlebar()

export const createWindow
  = async (title: string, width: number, height: number, icon: string, preload: string) =>
    new BrowserWindow({
      title,
      width,
      minWidth: 640,
      height,
      minHeight: 640,
      icon,
      frame: false,
      backgroundColor: '#fff',
      webPreferences: {
        preload,
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: false,
      },
    })
