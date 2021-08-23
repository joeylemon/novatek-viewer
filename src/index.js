import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app.js'
import store from './redux/store'
import 'babel-polyfill'

window.onload = () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
}
