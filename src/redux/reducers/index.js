
import {combineReducers} from 'redux'
import calcReducer from './calcReducer.js'
import userReducer from './userReducer.js'

const Reducer = combineReducers({
	calcReducer,
	userReducer
})

export default Reducer