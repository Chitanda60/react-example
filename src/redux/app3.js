
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
// 
// 先将lcoation作为state 和 routeReducer 存入store 每次push时触发dispatch一个type=LOCATION_CHANGE的action生产用以新的state
// 
// const defaultSelectLocationState = state => state.routing
// // 将history的变化同步到state上 syncHistoryWithStore修改了history.listen
// const syncHistoryWithStore = (history, store, {selectLocationState = defaultSelectLocationState} = {}) => {
// 	const getLocationInStore = () => {
// 		const locationState = selectLocationState(store.getState())
// 	}

// 	const handleStoreChange = () => {
// 		const locationInStore = getLocationInStore(true)

// 	}

// 	let unsubscribeFromStore = store.subscribe(handleStoreChange)
// }





/**
 * React-router
 */
// Router.init = () => {
// 	window.addEventListener('load', this.refresh.bind(this), false)
// 	window.addEventListener('hashchange', this.refresh.bind(this), false)
// }

// // 路由核心模块 收集listener & 执行listener
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

// const Router = {
// 	componentWillMount: () => {
// 		const history = this.props.history
// 		// 包装history得到_useRoutes2的listen方法
// 		this.history = _useRoutes2['default'](history)({ routes: routes, parseQueryString: parseQueryString, stringifyQuery: stringifyQuery })
// 		// 为Router注册一个含有setState的回调函数 用以触发render
// 		this.unlisten = this.history.listen((error, state) => _this.setState(state, _this.props.onUpdate))
// 		// 添加到ChangeListeners
// 		const listen = (listener) => {
// 			// ChangeListeners.push(listener)
// 			return history.listen((location) => {
// 				// 根据当前location和路由表匹配到对应的路由子集 得到对应的state执行回调展示更新
// 				match(location, (error, redirectLocation, nextState) => {
// 					listener(null, nextState)
// 				})
// 			})
// 		}
// 	},
// }
// const Link = {
// 	render: () => {
// 		props.onClick = (e) =>  {
// 			return _this.handleClick(e)
// 		}
// 		if (history) {
// 			// 将参数组合成href属性
// 			props.href = history.createHref(to, query)
// 		}
// 		// 返回a标签
// 		return _react2['default'].createElement('a', props)
// 	},
// 	handleClick = (event) => {
// 		event.preventDefault()
// 		// Link实质上是执行pushState 具体更新url方法分为两种
// 		// createBrowserHistory 使用 window.history.replaceState(historyState, null, path)
// 		// createHashHistory 使用 window.location.hash = url
// 		this.context.history.pushState(this.props.state, this.props.to, this.props.query)
// 		// 更新url之后调用updateLocation
// 	}
// }

// // 路由跳转分两步 更新路由:各种形式的push + 更新展示:触发监听，即调用updateLocation 执行监听回调触发
// const updateLocation = (newLocation) => {
// 	ChangeListeners.forEach((listener) => {
// 		listener(newLocation)
// 	})
// }










