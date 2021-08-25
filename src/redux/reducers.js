import { ACTIONS } from './actions'

const initialState = {
    loading: false,
    activeTrip: undefined,
    trips: []
}

function rootReducer (state = initialState, action) {
    const { payload, type } = action
    switch (type) {
    case ACTIONS.SET_LOADING: {
        return { ...state, loading: payload }
    }

    case ACTIONS.SET_TRIP_LIST: {
        return { ...state, trips: payload }
    }

    case ACTIONS.SET_ACTIVE_TRIP: {
        return { ...state, activeTrip: payload }
    }
    }

    return state
};

export default rootReducer
