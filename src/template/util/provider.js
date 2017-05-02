
import {Component, PropTypes, Children} from 'react'

class Provider extends Component {
	getChildContext() {		
		return {store: this.store}
	}

	constructor(props, context) {
		super(props, context)
		this.store = props.store
	}

	render() {		
		return Children.only(this.props.children)
	}
}

Provider.childContextTypes = {
	store: PropTypes.object
}

export default Provider