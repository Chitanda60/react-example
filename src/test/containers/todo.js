
import React, {Component} from 'react'

import TodoItem from '../components/todoItem'

class Todo extends Component {
	constructor(props) {
		super(props)

		this.state = props
	}

	change() {
		this.setState(Object.assign({}, this.state, {
			text: '执行'
		}))
	}

	render() {
		const {text} = this.state

		return (
			<div>
				<TodoItem text={text} change={this.change.bind(this)} />
			</div>
		)
	}
}

export default Todo