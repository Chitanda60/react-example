
// 服务端渲染模板
const React = require('react')

const Layout = require('../layout')
const Iso = require('../iso.js')

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {microdata, isServer} = this.props
		const serverData = JSON.stringify(microdata)

		return (
			<Layout>
				<div id="root" data-microdata={serverData}>
					{	
						// 删除是页面直出 保留是数据直出
						<Iso microdata={microdata} isServer={isServer}></Iso>
					}
				</div>
			</Layout>			
		)
	}
}

module.exports = Home
