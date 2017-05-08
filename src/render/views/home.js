
// 服务端渲染模板
const React = require('react')

const Layout = require('../layout')
const Iso = require('../iso.js')

class Home extends React.Component {
	constructor(props) {
		super(props)
	}	

	render() {
		const {data, isServer} = this.props
		const serverData = JSON.stringify(data)

		return (
			<Layout>
				<div id="root" data-data={serverData}>
					{	
						// 删除是页面直出 保留是数据直出
						<Iso data={data} isServer={isServer}></Iso>
					}
				</div>
			</Layout>			
		)
	}
}

module.exports = Home
