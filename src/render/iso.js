
// 前后端公用的Iso模块
const React = require('react')

import {Router, Route, IndexRoute, hashHistory, browserHistory, createMemoryHistory} from 'react-router'

const Template = require('./components/template.js')

const Layout = require('./layout')

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
				<Route path='/'>
					<IndexRoute component={this.wrapComponent(Template)}></IndexRoute>
					<Route path='/home' component={Template}></Route>
				</Route>
			</Router>
		)
	}
}

module.exports = Iso