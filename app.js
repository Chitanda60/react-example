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
	// app.use(async (ctx, next) => {
	// 	await next()
	// })
	// 拦截请求内容替换
	// app.use((req, res) => {
	//     // Match current URL to the corresponding React page
	//     // req.url必须是完整的URL，包含hash和query等
	//     match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
	//         if (error) {
	//             res.status(500).send(error.message);
	//         } else if (redirectLocation) {
	//             res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	//         } else if (renderProps) {
	//             res.status(200)
	//             var react_stuff = renderToString(<RouterContext {...renderProps} />);
	//             //renderProps传递给RouterContext
	//             var c =  index.replace(
	//                 /<div id="root"><\/div>/,
	//                 '<div id="root">' + react_stuff + '</div>'
	//             );
	//             //将root中在服务端填充内容
	//             console.log(c);
	//             res.send(c);
	//         } else {
	//             res.status(404).send('not found');
	//         }
	//     })
	// })
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