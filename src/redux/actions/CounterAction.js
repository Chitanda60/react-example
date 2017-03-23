
import {createAction} from 'redux-actions'

import fetchData from '../data_manager/fetchData'

const CounterAction = {
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

export default CounterAction