
import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import calcReducer from './calcReducer.js'
import userReducer from './userReducer.js'
import formReducer from './formReducer.js'

const Reducer = combineReducers({
	calcReducer,
	userReducer,
	formReducer,
	routing
})

/**
 * 高阶组件 增强或者复用reducer
 * 额外的action
 * 更多的state
 * 将不能处理的action交给原始的reducer
 */
// const generateReducer = (prefix, state) => {
// 	const LOAD_DATA = prefix + 'LOAD_DATA'
// 	const initialState = {...state}

// 	return (state = initialState, action) => {
// 		switch (action.type) {
// 			case LOAD_DATA:
// 				return state
// 			default:
// 				return state
// 		}
// 	}
// }

// const undoable = (reducer) => {
// 	const initialState = {
// 		past: [],
// 		present: reducer(undefined, {}),
// 		future: []
// 	}

// 	return (state = initialState, action) => {
// 		const {past, present, future} = state

// 		switch (action.type) {
// 			case '@@redux-undo/UNDO':
// 				return state
// 			case '@@redux-undo/REDO':
// 				return state
// 			default:
// 				return state				
// 		}
// 	}
// }

export default Reducer

// routerReducer
// const initialState = {locationBeforeTransitions: null}
// const routerReducer = (state = initialState, {type, payload} = {}) => {
// 	if (type = 'LOCATION_CHANGE') {
// 		return {...state, locationBeforeTransitions: payload}
// 	}
// }