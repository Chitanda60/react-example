
// 前后端公用的Iso模块: 路由模块
const React = require('react')

import {Router, Route, browserHistory, createMemoryHistory} from 'react-router'

const Template1 = require('./components/template1.js')
const Template2 = require('./components/template2.js')
const Layout = require('./layout')

class Iso extends React.Component {
	constructor(props) {
		super(props)
	}

	// 注入服务端传入的props
	wrapComponent(Comp) {
		const {data, isServer} = this.props		
		const tip = isServer ? 'Server Render' : 'Client Render'		

		return class extends React.Component {
			render() {
				const {children} = this.props

				return (
					<Comp data={data} tip={tip}>{children}</Comp>
				)
			}
		}
	}

	render() {
		const {data, isServer} = this.props
		const {path} = data

		return (
			<Router history={isServer ? createMemoryHistory(path || '/') : browserHistory}>
				<Route path='/home' component={this.wrapComponent(Template1)}></Route>
				<Route path='/card' component={this.wrapComponent(Template2)}></Route>
			</Router>
		)
	}
}

module.exports = Iso