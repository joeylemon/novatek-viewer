import { ipcRenderer as ipc } from 'electron'
import path from 'path'
import fs from 'fs'

const cache = {}

/**
 * Get the Electron application's base directory
 * @returns {String} The path to the application directory
 */
export function getAppPath () {
    if (cache.appPath) return cache.appPath

    cache.appPath = ipc.sendSync('get-app-path')
    return cache.appPath
}

/**
 * Get the OS temporary directory for files
 * @returns {String} The path to the temporary directory
 */
export function getTempDirectory () {
    if (cache.tempDir) return cache.tempDir

    cache.tempDir = ipc.sendSync('get-temp-dir')
    return cache.tempDir
}

/**
 * Get the filepath to the given asset
 * @param {String} file The file name of the asset
 * @returns {String} The path to the asset
 */
export function getAssetPath (file) {
    const appPath = getAppPath()
    return path.join(appPath, 'src', 'assets', file)
}

/**
 * Get the path to the thumbnail for the given video
 * @param {String} name The base name of the video file
 * @returns {String} The path where the given video thumbnail should exist
 */
export function getThumbnailPath (name) {
    const tempDir = getTempDirectory()
    const thumbnailDir = path.join(tempDir, 'novatek-viewer')
    if (!fs.existsSync(thumbnailDir)) { fs.mkdirSync(thumbnailDir) }

    return path.join(tempDir, 'novatek-viewer', name.replace(/mp4|MP4/, 'jpg'))
}
