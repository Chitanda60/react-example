
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
		// 服务端渲染 内部调用renderToSring或者renderToStaticMarkup生成html字符串返回前端
		ctx.body = ctx.render('home', {
			microdata: {
				domain: '//localhost:1803',				
			},
			data: {
				path: ctx.path,
				name: '蛇莓',
				mess: '夏玲'
			},
			isServer: true
		})		
	})
	router.get('/card', async (ctx) => {
		ctx.body = ctx.render('card', {
			microdata: {
				domain: '//localhost:1803',				
			},
			data: {
				path: ctx.path,
				date: '2017.5.8'
			},
			isServer: true
		})		
	})
	app.use(router.routes()).use(router.allowedMethods())
	// 静态资源地址
	app.use(serve(__dirname + '/src/render'))
	// 服务端渲染模板配置
	// internals决定使用renderToSring还是renderToStaticMarkup 前者添加react-id避免重复渲染检查后者不会
	react(app, {
		views: path.join(__dirname, './src/render/views'),
		doctype: '<!DOCTYPE html>',
		extname: 'js',
		internals: false
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