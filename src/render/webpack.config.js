
// 打包配置 for 服务端渲染 测试文件
var webpack = require('webpack');
var path = require('path');

module.exports = {
// 程序的入口文件
    entry: {
        "entry":'./app.js',
        // "entry2":'./src/app2.js'
    },
    output: {
// 生产环境下资源访问路径
        publicPath: '../render/public/',
// 所有打包好的资源的存放位置
        path: '../render/public/',
// 生成的打包文件名
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
//             {
// // 用于匹配加载器支持的文件格式的正则表达式
//                 test: /\.(js)$/,
// // 要使用的加载器类型
// // 加载器支持通过查询字符串的方式接收参数
//                 loader: 'jsx-loader?harmony'
//             },
            {
                test: /\.(css)$/,
// 多个加载器通过“!”连接
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
// url-loader 支持base64 编码的行内资源
                loader: 'url-loader?size=8192'
            }
        ],
        // 确认模块中没有依赖，webpack扫描略过
        noParse: /es6-promise\.js$/
    },
    babel: {
        presets: ['stage-0', 'es2015', 'react'],
        plugins: [
            'transform-class-properties',
            'transform-async-to-generator',
            [
                'transform-runtime',
                {
                    'regenerator': true
                }
            ]
        ]
    },
    // 以脚本引用形式引进而不被打包进来    
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },            
};