
import {createStore, applyMiddleware, compose} from 'redux'

// middlewares
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import sequenceAction from 'redux-sequence-action'
import createLogger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'

import {hashHistory} from 'react-router'
	
import Reducer from '../reducers'
import DevTools from '../containers/DevTools'

// 作用：用redux action形式来进行路由切换 支持发送路由变动action 的 middleware 
const routerMiddlewares = routerMiddleware(hashHistory)

const configureStore = () => {
	 return createStore(
		Reducer,
		compose(
			applyMiddleware(thunk, promiseMiddleware, createLogger()),
			DevTools.instrument()
		)
	)
}

// const configureStore = () => {
// 	// thunk & promise
	// return applyMiddleware(thunk, promiseMiddleware, createLogger())(createStore)(Reducer)

// 	// sequence action
// 	// return applyMiddleware(sequenceAction, thunk, createLogger())(createStore)(Reducer)

// 	// saga
// 	// return applyMiddleware(createSagaMiddleware(), createLogger())(createStore)(Reducer)
// }

// 使用node运行环境区别加载
// if (process.env.NODE_ENV === 'production') {
// 	module.exports = require('./configureStore.prod')
// } else {
// 	module.exports = require('./configureStore.dev')
// }

export default configureStore
