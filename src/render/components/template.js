
const React = require('react')

class Template extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {name, mess} = this.props.data

		return (
			<div>
				<div>{name}</div>
				<div>{mess}</div>
			</div>
		)
	}
}

module.exports = Template