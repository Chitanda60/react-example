
const React = require('react')

class Template extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	name: '',
		// 	mess: ''
		// }
	}

	// componentDidMount() {
	// 	const self = this

	// 	getMessage((json) => {
	// 		self.setState({
	// 			name: json.name,
	// 			mess: json.mess
	// 		})
	// 		console.log(json)
	// 	})
	// }

	render() {
		const {data, tip} = this.props
		const {name, mess} = data

		return (
			<div>
				<div>{tip}</div>
				<div>{name}</div>
				<div>{mess}</div>
			</div>
		)
	}
}

module.exports = Template
