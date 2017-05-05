
// 客户端渲染组件
import {Component} from 'react'
import Template from '../components/template'

import {getMessage} from '../data_manager/request'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			mess: ''
		}
	}

	componentDidMount() {
		const self = this

		getMessage((json) => {
			self.setState({
				name: json.name,
				mess: json.mess
			})
			console.log(json)
		})
	}

	render() {
		return <Template data={this.state}></Template>
	}
}

export default Home