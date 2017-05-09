
const React = require('react')

import {fetchMessage} from '../data_manager/request'

class Template1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data1: null
		}
	}

	// 利用static扩展组件 供服务端渲染拉取数据使用
	static fetchMessage = async function(callback) {
		const data = await fetchMessage()

		callback(data)
	}

	componentWillMount() {		
		const {data} = this.props

		if (!!data) {
			this.setState({
				data1: data
			})
		}
	}

	componentDidMount() {		
		if (!this.state.data1) {
			this.constructor.fetchMessage((data) => {
				this.setState({
					data1: data
				})
			})
		}
	}

	goCard() {
		this.props.router.push({
			pathname: '/card',
			query: {}
		})
	}

	render() {
		const {data1} = this.state		

		return !!data1 ? (
			<div onClick={::this.goCard}>
				<div>{data1.name}</div>
				<div>{data1.mess}</div>
			</div>
		) : null
	}
}

module.exports = Template1
