import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import styles from './css/style.css'
import './js/auto_rem.js'
import Home from './containers/Home.jsx'
import List from './containers/List.jsx'
import Test from './containers/test.jsx'
import configureStore from './store/configureStore'

const store = configureStore()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/">
						<IndexRoute component={Home}/>
						<Route path="list" component={List}/>
						<Route path="home" component={Home}/>
					</Route>
				</Router>
			</Provider>
		);
	}
};

render(
	<App/>, document.getElementById('root'))
