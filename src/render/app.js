/**
 * index.js for render
 * 直出和同构探索
 */

const React = require('react')
const ReactDOM = require('react-dom')

import {Router, Route, hashHistory} from 'react-router'

const Iso = require('./iso.js')

// const Root = () => {
// 	return (
// 		<Router history={hashHistory}>
// 			<Route path="/home" component={Home}></Route>
// 		</Router>
// 	)
// }

const dom = document.getElementById('root')

const getServerData = (key) => {
	return JSON.parse(dom.getAttribute(`data-${key}`))
}

// 获得服务端渲染数据
const data = getServerData('data')

ReactDOM.render(<Iso data={data} isServer={false} />, dom);
