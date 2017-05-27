
import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {createAction} from 'redux-actions'

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
	desTodoByObject: () => {
		return {
			type: 'DES_TODO'
		}
	},
	desTodoByFunction: (dispatch) => { 
		return () => {
			dispatch({ type: 'DES_TODO' })
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

// container
class CounterComponent extends Component {
	constructor(props) {
		super(props)		
	}

	onAdd() {
		// 返回一个thunk
		console.log('ADD_TODO')
		this.props.addTodo()
	}

	onDes() {
		// 返回一个action
		console.log('DES_TODO')
		this.props.desTodo()
	}

	onShow() {
		// 返回一个promise或者Action的payload属性是promise
		console.log('SHOW_TODO')
		this.props.showTodo()
	}

	onHide() {
		console.log('HIDE_TODO')
		this.props.hideTodo()
	}

	onSearch() {
		console.log('SEARCH_TODO')
		this.props.searchTodo()
	}

	render() {
		return <CounterItem value={this.props.calcReducer} onAdd={::this.onAdd} onDes={::this.onDes} onShow={::this.onShow} onHide={::this.onHide} onSearch={::this.onSearch} />
	}
}
// 内部执行订阅 即输入逻辑
const mapStateToProps = (state) => {
	return {
		calcReducer: state.calcReducer,
	}
}
// 内部执行分发 即输出逻辑
const mapDispatchToProps = {
	addTodo: action.addTodo,
	desTodo: action.desTodo,
	showTodo: action.showTodo,
	hideTodo: action.hideTodo,
	searchTodo: action.searchTodo,
}
// mapDispatchToProps作为对象
// const mapDispatchToProps =  {	
// 	desTodo: action.desTodoByObject
// }
// mapDispatchToProps作为函数
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		desTodo: action.desTodoByFunction(dispatch)
// 	}
// }
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

// render
render(
	<Provider store={store}>
		<CounterContainer />
	</Provider>,
	document.getElementById('root2')
)

// // 将绑定的store作为context
// class Provider extends Component {
// 	getChildContext() {
// 		return {
// 			store: this.store
// 		}
// 	}
// 	constructor(props, context) {
// 		super(props, context)			
// 		this.store = props.store
// 	}
// 	render() {
// 		const {children} = this.props

// 		return Children.only(this.props.childrenż
// 	}
// }
// Provider.childContextTypes = {
//   	store: React.PropTypes.object
// }
// // connect生成container时会从context中取出context作为自己的store
// this.store = props.store || context.store

