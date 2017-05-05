
// 前后端公用的Iso模块
const React = require('react')

import {Router, Route, IndexRoute, hashHistory, browserHistory, createMemoryHistory} from 'react-router'

import Home from './server/home.js'

import Layout from './layout'

class Iso extends React.Component {
	constructor(props) {
		super(props)
	}

	// 注入服务端传入的props
	wrapComponent(Comp) {
		const {data} = this.props

		return class extends React.Component {
			render() {
				const {children} = this.props

				return (
					<Comp data={data}>{children}</Comp>
				)
			}
		}
	}

	render() {
		const {data, isServer} = this.props

		return (
			<Router history={isServer ? createMemoryHistory('/') : browserHistory}>
				<Route path='/' component={this.wrapComponent(Layout)}>
					<IndexRoute component={this.wrapComponent(Home)}></IndexRoute>
					<Route path='/home' component={Home}></Route>
				</Route>
			</Router>
		)
	}
}

module.exports = Iso