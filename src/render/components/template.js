
const React = require('react')

class Template1 extends React.Component {
	constructor(props) {
		super(props)
	}

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

module.exports = Template1
