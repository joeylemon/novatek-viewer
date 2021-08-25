import { ipcRenderer as ipc } from 'electron'
import path from 'path'

let appPath

/**
 * Get the Electron application's base directory
 * @returns {Promise<String>} The application directory
 */
export function getAppPath () {
    return new Promise(resolve => {
        if (appPath) return resolve(appPath)

        ipc.send('get-app-path')

        ipc.once('get-app-path-reply', (event, reply) => {
            appPath = reply
            return resolve(reply)
        })
    })
}

/**
 * Get the filepath to the given asset
 * @param {String} file The file name of the asset
 * @returns {String} The path to the asset
 */
export async function getAssetPath (file) {
    const appPath = await getAppPath()
    return path.join(appPath, 'assets', file)
}
