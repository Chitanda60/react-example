
// 服务端渲染服务
const Koa = require('koa')
const KoaRouter = require('koa-router')
const path = require('path')
const register = require('babel-register')
const react = require('koa-react-view')
const serve = require('koa-static')

// 使用一个log middleware
// app.use(async (ctx, next) => {
// 	const start = new Date()
// 	await next()
// 	const ms = new Date() - start
// 	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)	
// })

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
	app.use(serve(__dirname + '/server'))

	react(app, {
		views: path.join(__dirname, './src/render/server'),
		doctype: '<!DOCTYPE html>',
		extname: 'js'
	})
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