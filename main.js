import electron from 'electron'
import path from 'path'
import url from 'url'
import 'babel-polyfill'
import isDev from 'electron-is-dev'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 350,
        height: 320,
        webPreferences: {
            nodeIntegration: true
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

app.on('ready', createWindow)

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
