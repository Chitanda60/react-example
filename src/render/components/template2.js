
const React = require('react')

import {fetchDate} from '../data_manager/request'

class Template2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	static fetchDate = async function(callback) {
		const data = await fetchDate()

		callback(data)
	}

	componentDidMount() {
		this.constructor.fetchDate((data) => {
			this.setState({
				data: data
			})
		})
	}

	goHome() {
		this.props.router.push({
			pathname: '/home',
			query: {}
		})
	}

	render() {
		const {time} = this.state.data

		return (
			<div onClick={::this.goHome}>
				<div>{time}</div>
			</div>
		)
	}
}

module.exports = Template2
