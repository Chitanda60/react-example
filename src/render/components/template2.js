
const React = require('react')

import {fetchDate} from '../data_manager/request'

class Template2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data2: null
		}		
	}

	static fetchDate = async function(callback) {
		const data = await fetchDate()

		callback(data)
	}

	componentWillMount() {
		const {data} = this.props

		if (!!data) {
			this.setState({
				data2: data
			})
		}
	}

	componentDidMount() {
		if (!this.state.data2) {
			this.constructor.fetchDate((data) => {
				this.setState({
					data2: data
				})
			})
		}
	}

	goHome() {
		this.props.router.push({
			pathname: '/home',
			query: {}
		})
	}

	render() {
		const {data2} = this.state		

		return !!data2 ? (
			<div onClick={::this.goHome}>
				<div>{data2.time}</div>
			</div>
		) : null
	}
}

module.exports = Template2
