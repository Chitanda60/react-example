
import React from 'react'

const TodoItem = (props) => {
	const {text, change} = props

	return <h5 id="target" onClick={change}>{text}</h5>
}

export default TodoItem