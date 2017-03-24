
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import Reducer from '../reducers'

const configureStore = () => {
	 return createStore(
		Reducer,
		applyMiddleware(
			thunk, 
			promiseMiddleware,
			createLogger()
		)
	)	
}

export default configureStore