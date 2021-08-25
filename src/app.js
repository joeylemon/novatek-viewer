import React from 'react'
import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import TripList from './components/Trips/TripList'
import TripView from './components/Trips/TripView'
import TripSelector from './components/Trips/TripSelector'
import LoadingOverlay from './components/Utils/LoadingOverlay'

const App = () => {
    const isLoading = useSelector(state => state.loading)

    return (
        <div>
            {isLoading && <LoadingOverlay></LoadingOverlay>}
            <Router>
                <Switch>
                    <Route path="/trip">
                        <TripView />
                    </Route>
                    <Route path="/trips">
                        <TripList />
                    </Route>
                    <Route path="/">
                        <TripSelector />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
