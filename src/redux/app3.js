
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store'
import routes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const Root = ({store, history}) => (
	<Provider store={store}>
		<Router history={history} routes={routes}></Router>
	</Provider>
)

render(
	<Root store={store} history={history} />,
	document.getElementById('root3')
)

// history.push -> store.dispatch -> enhancedHistory.listen -> router
const defaultSelectLocationState = state => state.routing
const syncHistoryWithStore = (history, store, {selectLocationState = defaultSelectLocationState} = {}) => {
	const getLocationInStore = () => {
		const locationState = selectLocationState(store.getState())
	}

	const handleStoreChange = () => {
		const locationInStore = getLocationInStore(true)

	}

	let unsubscribeFromStore = store.subscribe(handleStoreChange)
}

// react-router
// Router.init = () => {
// 	window.addEventListener('load', this.refresh.bind(this), false)
// 	window.addEventListener('hashchange', this.refresh.bind(this), false)
// }

// 路由核心模块 收集listener&执行listener
// const history = {
// 	listeners: [],
// 	listen: (listener) => {
// 		history.listeners.push(listener)
// 	},
// 	updateLocation: () => {
// 		// history.listeners
// 		// debugger
// 		history.listeners.forEach(listener => listener())
// 	},
// }
// // 实例化路由 routes是path to component各个映射的路由表
// const Router = (history, routes) => {			
// 	const _source = history
// 	const _routes = routes			
// 	_routes.forEach((route) => {
// 		_source.listen(() => {
// 			console.log(`切换到${route.path}`)
// 		})
// 	})
// 	_source.updateLocation()
// }
// // 实例化组件
// const Route = (path, component) => {
// 	return {path, component}
// }
// Router(history, [Route('/user', 'UserPageComponent')])









