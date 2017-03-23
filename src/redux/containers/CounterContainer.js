
import {Component} from 'react'
import {connect} from 'react-redux'

import CounterAction from '../actions/CounterAction'

import CounterItem from '../components/CounterItem'

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
	addTodo: CounterAction.addTodo,
	desTodo: CounterAction.desTodo,
	showTodo: CounterAction.showTodo,
	hideTodo: CounterAction.hideTodo,
	searchTodo: CounterAction.searchTodo,
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

export default CounterContainer









