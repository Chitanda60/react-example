
const React = require('react')

import {fetchMessage} from '../data_manager/request'

class Template1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	// 利用static扩展组件 供服务端渲染拉取数据使用
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
		this.props.router.push({
			pathname: '/card',
			query: {}
		})
	}

	render() {
		const {tip} = this.props
		const {data} = this.state
		const {name, mess} = data

		return (
			<div onClick={::this.goCard}>
				<div>{tip}</div>
				<div>{name}</div>
				<div>{mess}</div>
			</div>
		)
	}
}

module.exports = Template1
