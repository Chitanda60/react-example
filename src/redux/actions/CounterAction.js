
import {createAction} from 'redux-actions'

import {fetchData, getMessage, getDate} from '../data_manager/request'

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
	sagaTodo: () => (dispatch, ) => {
		// saga用法
		
	},	
	searchTodo: () => {
		// sequence action用法
		return [
			// thunk
			(dispatch, getState) => {
				getMessage((data) => {
					dispatch({
						type: 'SEARCH_TODO_1',
						data: data
					})
				})
			},			
			// action
			{
				type: 'SEARCH_TODO_2'
			},			
		]
	},
	linkTodo: (push) => (dispatch, getState) => {
		dispatch(push('/user'))
	}
}

export default CounterAction