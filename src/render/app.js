/**
 * index.js for render
 * 直出和同构探索
 */

const React = require('react')
const ReactDOM = require('react-dom')

const dom = document.getElementById('root')

const getServerData = (key) => {
  return JSON.parse(dom.getAttribute(`data-${key}`))
}

// 获得服务端渲染数据
const microdata = getServerData('microdata')
const mydata = getServerData('mydata')

ReactDOM.render(<Iso microdata={microdata} mydata={mydata} isServer={false} />, dom)
