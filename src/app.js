import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import TripList from './components/Trips/TripList'
import TripView from './components/Trips/TripView'
import TripSelector from './components/Trips/TripSelector'

export default class App extends React.Component {
    render () {
        return (
            <div>
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
}
