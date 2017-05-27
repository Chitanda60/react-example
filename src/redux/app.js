
import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {createAction} from 'redux-actions'

// type
const ADD_TODO = 'ADD_TODO'
const DES_TODO = 'DES_TODO'
const SET_NAME = 'SET_NAME'

// action
const fetchData = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => resolve({data: 'RESOLVE'}), 3000)
	} else {
		setTimeout(() => reject({data: 'REJECT'}), 3000)
	}
})

const action = {
	addTodo: () => (dispatch, getState) => {
		dispatch({ type: 'ADD_TODO' }) 
	},
	desTodo: () => {
		return {
			type: 'DES_TODO'
		}
	},
	showTodo: () => {
		// promiseMiddleware 用法1 action不是标准的flux action 然后检查payload是否是promise
		return fetchData.then((res) => {			
			return {
				type: 'SHOW_TODO',
				preload: res.data
			}
		})
	},
	hideTodo: () => {
		// promiseMiddleware 用法2 通过createAction创建标准的flux action ，然后检查payload是否是promise
		return createAction('HIDE_TODO')(fetchData.then(res => res.data))
	},
	searchTodo: () => {
		
	}
}

// reducer
const calcReducer = (state = 1, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state + 1

		case 'DES_TODO':
			return state - 1

		case 'SHOW_TODO':
			return state

		case 'HIDE_TODO':
			return state

		case 'SEARCH_TODO':
			return state

		default:
			return state
	}
}
const userReducer = (state = 'shemei', action) => {
	switch (action.type) {
		case 'SET_NAME':
			return state
		default:
			return state
	}
}
const Reducer = combineReducers({
	calcReducer,
	userReducer
})

// store
const store = createStore(
	Reducer,
	applyMiddleware(
		thunk, 
		promiseMiddleware,
		createLogger()
	)
)

// container
class Counter extends Component {
	constructor(props) {
		super(props)
	}

	onAdd() {
		// 返回一个thunk
		console.log('ADD_TODO')
		store.dispatch(action.addTodo())
	}

	onDes() {
		// 返回一个action
		console.log('DES_TODO')
		store.dispatch(action.desTodo())
	}

	onShow() {
		// 返回一个promise或者Action的payload属性是promise
		console.log('SHOW_TODO')
		store.dispatch(action.showTodo())
	}

	onHide() {
		console.log('HIDE_TODO')
		store.dispatch(action.hideTodo())
	}

	onSearch() {
		console.log('SEARCH_TODO')
		store.dispatch(action.searchTodo())
	}	

	render() {
		const {calcReducer} = store.getState()
		return <CounterItem value={calcReducer} onAdd={this.onAdd} onDes={this.onDes} onShow={this.onShow} onHide={this.onHide} onSearch={this.onSearch} />
	}
}

// component
const CounterItem = ({value, onAdd, onDes, onShow, onHide, onSearch}) => (
	<div>
		<h1>{value}</h1>
		<div className="add" onClick={onAdd}>ADD</div>
		<div className="dec" onClick={onDes}>DES</div>
		<div className="show" onClick={onShow}>SHOW</div>
		<div className="hide" onClick={onHide}>HIDE</div>
		<div className="search" onClick={onSearch}>SEARCH</div>
	</div>
)

// render
const Render = () => {
	render(
		<Counter />,
		document.getElementById('root')
	)
}
Render()
store.subscribe(Render)

// 部分源码实现
// const createStore = (reducer, initialState, enhancer) => {	
	// let state	
	// let listeners = []
	// let currentReducer = reducer
	// let currentState = initialState
	// // 某个action是否处于分发状态
	// let isDispatching = false

// 	const getState = () => state

// 	const dispatch = (action) => {
// 		state = reducer(state, action)
// 		listeners.forEach(l => l())
// 	}

// 	const subscribe = (listener) => {
// 		listeners.push(listener)
// 		return () => {
// 			listeners = listeners.filter(l => l !== listener)
// 		}
// 	}
// }

// const applyMiddleware = (...middlewares) => {
// 	return (createStore) => (reducer, preloadedState, enhancer) => {
// 		//createStore时调用enhancer是传入参数
// 		var store = createStore(reducer, preloadedState, enhancer)
// 		var dispatch = store.dispatch
// 		var chain = []
// 		//供各middleware公用
// 		var middlewareAPI = {
// 			getState: store.getState,
// 			dispatch: (action) => dispatch(action)
// 		}
// 		chain = middlewares.map(middleware => middleware(middlewareAPI))
// 		// 从右到左逐层包装dispatch
// 		dispatch = compose(...chain)(store.dispatch)
// 		return {...store, dispatch}
// 	}
// }

// const compose = (...funcs) => {
// 	if (funcs.length === 0) {
// 		return arg => arg
// 	}
// 	if (funcs.lenght === 1) {
// 		return funcs[0]
// 	}
// 	const last = funcs[funcs.length - 1]
// 	const rest = funcs.slice(0, -1)
// 	//reduceRight是为了让next作为前一个middleware的参数
// 	return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
// }

// // functional action
// const createThunkMiddleware = (extraArgument) => {
// 	// {dispatch, getState} 在applyMiddleware中传入
// 	// next 在compose中传入，就是下一个middleware
// 	// action 在dispatch传入
// 	return ({dispatch, getState}) => next => action => {
// 		if (typeof action === 'function') {
// 			return action(dispatch, getState, extraArgument)
// 		}
// 		return next(action)
// 	}
// }
// const thunk = createThunkMiddleware()
// thunk.withExtraArgument = createThunkMiddleware

// replaceReducer