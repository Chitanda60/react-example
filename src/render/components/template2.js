
const React = require('react')

class Template2 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// const {date} = this.props.data
		const date = '2017.2.25'

		return (
			<div>
				<div>{date}</div>
			</div>
		)
	}
}

module.exports = Template2
