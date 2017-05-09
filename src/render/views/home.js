
// 服务端渲染模板
const React = require('react')

const Layout = require('../layout')
const Iso = require('../iso.js')

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {microdata, mydata, isServer} = this.props
		const serverMicroData = JSON.stringify(microdata)
		const serverMyData = JSON.stringify(mydata)		

		return (
			<Layout>
				<div id="root" data-microdata={serverMicroData} data-mydata={serverMyData}>
					<Iso microdata={microdata} mydata={mydata} isServer={isServer}></Iso>
				</div>
			</Layout>			
		)
	}
}

module.exports = Home
