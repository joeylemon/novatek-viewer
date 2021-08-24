export const ACTIONS = {
    ADD_TRIP: 'ADD_TRIP',
    SET_ACTIVE_TRIP: 'SET_ACTIVE_TRIP'
}

export function setActiveTrip (payload) {
    return { type: ACTIONS.SET_ACTIVE_TRIP, payload }
}

export function addTrip (payload) {
    return { type: ACTIONS.ADD_TRIP, payload }
}
