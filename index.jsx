import 'babel-core/polyfill'
import React from 'react'
import FastClick from 'react-fastclick-alt'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import styles from './css/style.css'
import './js/auto_rem.js'
import Home from './containers/Home.jsx'
import List from './containers/List.jsx'
import Test from './containers/test.jsx'
import Detail from './containers/Detail.jsx'
import EvaList from './containers/EvaList.jsx'
import configureStore from './store/configureStore'
const store = configureStore()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					  <Route name='home' path="/" component={Home}/>
						<Route name='list' path="list" component={List}/>
						<Route name='home' path="home" component={Home}/>
						<Route name='detail' path="detail" component={Detail}/>
						<Route name='evalist' path="evalist" component={EvaList}/>
				</Router>
			</Provider>
		);
	}
};

render(
	<FastClick>
	<App/></FastClick>, document.getElementById('root'))
