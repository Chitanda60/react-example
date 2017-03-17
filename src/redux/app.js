
import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'

// type
const ADD_TODO = 'ADD_TODO'
const DES_TODO = 'DES_TODO'
const SET_NAME = 'SET_NAME'

// action
const action = {
	addTodo: () => {
		return {
			type: 'ADD_TODO'			
		}
	},
	desTodo: () => {
		return {
			type: 'DES_TODO'
		}
	}	
}

// reducer
const calcReducer = (state = 1, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state + 1

		case 'DES_TODO':
			return state - 1

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
const store = createStore(Reducer)

// container
class Counter extends Component {
	constructor(props) {
		super(props)		
	}

	onAdd() {
		console.log('ADD_TODO')
		store.dispatch({type: 'ADD_TODO'})
	}
	onDes() {
		console.log('DES_TODO')
		store.dispatch({type: 'DES_TODO'})
	}

	render() {		
		const {calcReducer} = store.getState()
		return <CounterItem value={calcReducer} onAdd={this.onAdd} onDes={this.onDes} />
	}
}

// component
const CounterItem = ({value, onAdd, onDes}) => (
	<div>
		<h1>{value}</h1>
		<div className="add" onClick={onAdd}>ADD</div>
		<div className="dec" onClick={onDes}>DES</div>
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

// const createStore = (reducer) => {
// 	let state
// 	let listeners = []

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








