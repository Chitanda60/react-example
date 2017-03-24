
import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import calcReducer from './calcReducer.js'
import userReducer from './userReducer.js'

const Reducer = combineReducers({
	calcReducer,
	userReducer,
	routing
})

export default Reducer

// routerReducer
const initialState = {locationBeforeTransitions: null}
const routerReducer = (state = initialState, {type, payload} = {}) => {
	if (type = 'LOCATION_CHANGE') {
		return {...state, locationBeforeTransitions: payload}
	}
}