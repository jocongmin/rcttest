import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import styles from './css/style.css'
import './js/auto_rem.js'
import Home from './containers/Home.jsx'
import List from './containers/List.jsx'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <List />
  </Provider>,
  document.getElementById('root')
)
