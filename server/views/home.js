
// 服务端渲染模板 
const React = require('react')

import Default from './layout/default'
import Template from '../../src/render/components/template.js'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {microdata, data} = this.props

		return (
			<Default microdata={microdata}>
				<Template data={data}></Template>
			</Default>
		)
	}
}

module.exports = Home
