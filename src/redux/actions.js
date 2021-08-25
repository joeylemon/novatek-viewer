export const ACTIONS = {
    SET_TRIP_LIST: 'SET_TRIP_LIST',
    SET_ACTIVE_TRIP: 'SET_ACTIVE_TRIP'
}

export function setActiveTrip (payload) {
    return { type: ACTIONS.SET_ACTIVE_TRIP, payload }
}

export function setTripList (payload) {
    return { type: ACTIONS.SET_TRIP_LIST, payload }
}
