
import {Component, PropTypes, Children} from 'react'
import Provider from '../util/provider'

class Module extends Component {
	constructor(props) {
		super(props);
	}

	render() {		
		console.log(this.context)
		
		return <div>织夏</div>
	}
}

Module.contextTypes = {
	store: PropTypes.object
}

const ContextView = () => (
	<Provider store = {{name: '夏玲'}}>
		<Module />
	</Provider>
)

export default ContextView