import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import TripListItem from './components/TripListItem'

export default class App extends React.Component {
    render () {
        return (
            <Router>
                <Route path="/">
                    <TripList />
                </Route>
            </Router>
            <div className={'hello'}>
                <h2>Hello Electrate</h2>
                <img src="./assets/logo.png" />
                <h4>A basic Electron + React.js template</h4>
                <h4>Have Fun!</h4>
                <TripListItem />
            </div>
        )
    }
}
