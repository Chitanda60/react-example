
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import Reducer from '../reducers'
// import DevTools from '../containers/DevTools'

// const configureStore = () => {
// 	 return createStore(
// 		Reducer,
// 		compose(
// 			applyMiddleware(thunk, promiseMiddleware, createLogger()),
// 			DevTools.instrument()
// 		)		
// 	)
// }

const configureStore = () => {
	return applyMiddleware(thunk, promiseMiddleware, createLogger())(createStore)(Reducer)
}

export default configureStore