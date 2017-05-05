
// // 前端
// const React = require('react')

// import Template from '../components/template'

// import {getMessage} from '../data_manager/request'

// class Home extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			name: '',
// 			mess: ''
// 		}
// 	}

// 	componentDidMount() {
// 		const self = this

// 		getMessage((json) => {
// 			self.setState({
// 				name: json.name,
// 				mess: json.mess
// 			})
// 			console.log(json)
// 		})
// 	}

// 	render() {
// 		const {isServer} = this.props

// 		return (
// 			<div>
// 				<Template data={this.state}></Template>
// 			</div>
// 		)
// 	}
// }

// module.exports = Home

const React = require('react')

import Iso from '../iso.js'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}	

	render() {
		const {data, isServer} = this.props

		return (
			<div id="root" data-data={data}>
				<Iso data={data} isServer={isServer}></Iso>
			</div>
		)
	}
}

module.exports = Home
