
// 服务端渲染服务
const Koa = require('koa')
const KoaRouter = require('koa-router')
const path = require('path')
const register = require('babel-register')
const react = require('koa-react-view')
const serve = require('koa-static')

const App = () => {
	const app = new Koa()
	const router = new KoaRouter()

	// 初始化路由分派的generator
	router.get('/home', async (ctx) => {
		// 服务端渲染 内部调用ReactDOMServer.renderToSring或者ReactDOMServer.renderToStaticMarkup生成html字符串返回前端
		ctx.body = ctx.render('home', {
			microdata: {
				domain: '//localhost:1803'
			},
			data: {
				name: '蛇莓',
				mess: '夏玲'
			},
			isServer: true
		})
	})
	app.use(router.routes()).use(router.allowedMethods())
	// 静态资源地址
	app.use(serve(__dirname + '/src/render'))
	// 服务端渲染模板配置
	react(app, {
		views: path.join(__dirname, './src/render/views'),
		doctype: '<!DOCTYPE html>',
		extname: 'js'
	})
	// require资源编译模式
	register({
		presets: ['stage-0', 'es2015', 'react'],
		extensions: ['.js'],
	})

	return app
}

const startApp = () => {
	const app = App()

	app.listen(1803, () => {
		console.log('app started at port 1803')
	})

	return app
}

startApp()