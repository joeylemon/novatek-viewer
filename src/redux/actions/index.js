export const ACTIONS = {
    ADD_TRIP: 'ADD_TRIP'
}

export function addTrip (payload) {
    return { type: ACTIONS.ADD_TRIP, payload }
}
