import React from 'react'
import {
    BrowserRouter as Router,
    // Switch,
    Route
    // Link
} from 'react-router-dom'
import TripList from './components/TripList'

export default class App extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <Route path="/">
                        <TripList />
                    </Route>
                    <Route path="/trip">
                        <TripList />
                    </Route>
                </Router>
            </div>
        )
    }
}
