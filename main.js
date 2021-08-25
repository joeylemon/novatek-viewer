import electron from 'electron'
import path from 'path'
import fs from 'fs'
import url from 'url'
import 'babel-polyfill'
import isDev from 'electron-is-dev'

const app = electron.app
const ipc = electron.ipcMain
const BrowserWindow = electron.BrowserWindow

let mainWindow

const setupEnvironment = () => {
    const tempDir = path.join(app.getPath('temp'), 'novatek-viewer')
    if (fs.existsSync(tempDir)) { fs.rmdirSync(tempDir, { recursive: true }) }
}

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 350,
        height: 320,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    mainWindow.setResizable(false)
    if (isDev) { mainWindow.webContents.openDevTools({ mode: 'detach' }) }

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', () => {
    setupEnvironment()
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

ipc.on('get-app-path', function (event, arg) {
    event.returnValue = app.getAppPath()
})

ipc.on('get-temp-dir', function (event, arg) {
    event.returnValue = app.getPath('temp')
})
