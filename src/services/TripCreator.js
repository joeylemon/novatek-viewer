// import ffmpegPath from 'ffmpeg-static'

const TEN_MINUTES_MS = 600000

class Trip {
    constructor (files) {
        this.files = files || []
        this.startDate = undefined
        this.endDate = undefined
        this.updateDates()
    }

    /**
     * Update the trip's start and end dates based on the first and last video timestamps
     */
    updateDates () {
        if (this.files.length === 0) return

        this.startDate = this.files[0].lastModifiedDate
        this.endDate = this.files[this.files.length - 1].lastModifiedDate
    }

    /**
     * Add a new file to the trip and update the start/end dates
     * @param {Object} file The new file
     */
    addFile (file) {
        this.files.push(file)
        this.updateDates()
    }

    /**
     * Get only the front dashcam files
     * @returns {Array<Object>} The list of video files
     */
    getFrontDashcamFiles () {
        return this.files.filter(e => !e.name.toLowerCase().includes('r.mp4'))
    }

    /**
     * Get only the rear dashcam files
     * @returns {Array<Object>} The list of video files
     */
    getRearDashcamFiles () {
        return this.files.filter(e => e.name.toLowerCase().includes('r.mp4'))
    }
}

/**
 * Get the list of trips from the given list of files
 * @param {Array} files The array of mp4 files
 * @returns {Array<Trip>} An array of trips grouped by date
 */
function getTrips (files) {
    const sortedFiles = files.sort((a, b) => a.lastModified > b.lastModified ? 1 : -1)
    const trips = []

    let currentTrip = new Trip()
    for (let i = 0; i < sortedFiles.length; i++) {
        const file = sortedFiles[i]

        if (currentTrip.files.length === 0 || file.lastModified - currentTrip.endDate.getTime() < TEN_MINUTES_MS) {
            currentTrip.addFile(file)
        } else {
            trips.push(currentTrip)
            currentTrip = new Trip([file])
        }

        // If this is the last file, always add the current trip
        if (i === sortedFiles.length - 1) {
            trips.push(currentTrip)
        }
    }

    return trips
}

// function mergeVideos (trip) {

// }

export default function createTrips (files) {
    const trips = getTrips(files)
    console.log(trips)
}
