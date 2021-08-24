import { ACTIONS } from '../actions'

const initialState = {
    activeTrip: undefined,
    trips: [
        {
            date: new Date('2021-05-15T17:36:41-04:00'),
            // const duration = moment("2018-05-16 12:22:00").diff(moment("2018-05-16 12:00:00"))
            // moment.utc(duration.as('milliseconds')).format('HH:mm:ss')
            duration: '00:14:54'
        },
        {
            date: new Date('2021-09-12T12:37:14-04:00'),
            duration: '00:32:10'
        },
        {
            date: new Date('2020-04-12T17:14:14-04:00'),
            duration: '00:22:43'
        }
    ]
}

function rootReducer (state = initialState, action) {
    const { payload, type } = action
    switch (type) {
    case ACTIONS.ADD_TRIP: {
        return { ...state, trips: state.trips.concat(payload) }
    }

    case ACTIONS.SET_ACTIVE_TRIP: {
        return { ...state, activeTrip: payload }
    }
    }

    return state
};

export default rootReducer
