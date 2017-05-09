
const React = require('react')

import {fetchMessage} from '../data_manager/request'

class Template1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}

	// 利用static扩展组件
	static fetchMessage = async function(callback) {
		const data = await fetchMessage()
		callback(data)
	}

	componentDidMount() {
		this.constructor.fetchMessage((data) => {
			this.setState({
				data: data
			})
		})
	}

	goCard() {
		console.log('')
	}

	render() {
		const {tip} = this.props
		const {data} = this.state
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
