import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/home.jsx'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
