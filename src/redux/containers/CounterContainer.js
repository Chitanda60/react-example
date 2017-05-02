
import {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {createSelector} from 'reselect'

import CounterAction from '../actions/CounterAction'

import CounterItem from '../components/CounterItem'

// 内部执行订阅 即输入逻辑
const mapStateToProps = (state) => {
	return {
		calcReducer: state.calcReducer,
	}
}
// 内部执行分发 即输出逻辑
const mapDispatchToProps = {
	addTodo: CounterAction.addTodo,
	desTodo: CounterAction.desTodo,
	showTodo: CounterAction.showTodo,
	hideTodo: CounterAction.hideTodo,
	sagaTodo: CounterAction.sagaTodo,
	searchTodo: CounterAction.searchTodo,
	linkTodo: CounterAction.linkTodo
}
// selector
const transformState = createSelector(	
	state => state.calcReducer,
	state => state.someReducer,
	(calcReducer, someReducer) => ({
		calcReducer: calcReducer,
		someReducer: someReducer
	})
)

// 装饰写法 - 原生数据
// @connect(mapStateToProps, mapDispatchToProps)
// 装饰写法 - 衍生数据
@connect(transformState, mapDispatchToProps)
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

	onSaga() {
		console.log('SAGA_TODO')
		this.props.sagaTodo()
	}

	onSearch() {
		console.log('SEARCH_TODO')
		this.props.searchTodo()
	}	

	onLink() {
		console.log(this.props)
		// this.props.linkTodo(push)
		this.props.router.push('/user')
	}

	render() {
		return <CounterItem value={this.props.calcReducer} 
			onAdd={::this.onAdd} onDes={::this.onDes} onShow={::this.onShow} onHide={::this.onHide} 
			onSaga={::this.onSaga} onSearch={::this.onSearch} onLink={::this.onLink} />
	}
}

export default CounterComponent

// // 内部执行订阅 即输入逻辑
// const mapStateToProps = (state) => {
// 	return {
// 		calcReducer: state.calcReducer,
// 	}
// }
// // 内部执行分发 即输出逻辑
// const mapDispatchToProps = {
// 	addTodo: CounterAction.addTodo,
// 	desTodo: CounterAction.desTodo,
// 	showTodo: CounterAction.showTodo,
// 	hideTodo: CounterAction.hideTodo,
// 	sagaTodo: CounterAction.sagaTodo,
// 	searchTodo: CounterAction.searchTodo,
// 	linkTodo: CounterAction.linkTodo
// }
// 常规写法
// const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

// export default CounterContainer









