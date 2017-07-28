
// 前后端公用的Iso模块: 路由模块
const React = require('react')

import {Router, Route, IndexRoute, browserHistory, createMemoryHistory, match, RouterContext} from 'react-router'

const Template1 = require('./components/template1.js')
const Template2 = require('./components/template2.js')

class Iso extends React.Component {
	constructor(props) {
		super(props)
	}

	// 注入服务端传入的props
	wrapComponent(Comp) {
		const {mydata, isServer} = this.props		

		return class extends React.Component {
			constructor(props) {
				super(props)
			}

			render() {
				const {children, ...other} = this.props
				
				return (
					<Comp data={mydata} {...other}>{children}</Comp>
				)
			}
		}
	}

	render() {
		const {microdata, isServer} = this.props
		const {path} = microdata

		return (
			<Router history={isServer ? createMemoryHistory(path || '/') : browserHistory}>
				<Route path={path || '/'} component={LayoutView}>
					<IndexRoute component={this.wrapComponent(matchComponent(path))}></IndexRoute>
					<Route path='/home' component={Template1}></Route>
					<Route path='/card' component={Template2}></Route>
				</Route>
			</Router>
		)
	}
}

const matchComponent = (path) => {
	let comp = {}

	switch (path) {
		case '/home':
			comp = Template1
			break
		case '/card':
			comp = Template2
			break
	}

	return comp
}

const LayoutView = (props) => {
	return <div id='container'>{props.children}</div>
}

module.exports = Iso