/**
 * 服务端渲染服务 页面直出
 */

const Koa = require('koa')
const KoaRouter = require('koa-router')
const path = require('path')
const register = require('babel-register')
const react = require('koa-react-view')
const serve = require('koa-static')

const {fetchMessage} = require('./src/render/data_manager/request')

const App = () => {
	const app = new Koa()
	const router = new KoaRouter()

	// 初始化路由分派的generator
	router.get('/home', async (ctx) => {
		await require('./src/render/components/template1').fetchMessage((data) => {
			// 服务端渲染 内部调用renderToSring或者renderToStaticMarkup生成html字符串返回前端
			ctx.body = ctx.render('/home', {
				microdata: {
					domain: '//localhost:1803',
					path: ctx.path,
				},
				mydata: data,
				isServer: true
			})
		})
	})
	router.get('/card', async (ctx) => {
		await require('./src/render/components/template2').fetchDate((data) => {
			ctx.body = ctx.render('home', {
				microdata: {
					domain: '//localhost:1803',
					path: ctx.path,
				},
				mydata: data,
				isServer: true
			})
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
		plugins: [
	      'transform-class-properties',
	      'transform-async-to-generator',
	      'transform-decorators-legacy',
	      ['transform-runtime', {
	        'regenerator': true
	      }]
	    ]
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