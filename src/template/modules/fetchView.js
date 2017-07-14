
import fetch from 'isomorphic-fetch'

const ajax = (url) => {
	// 创建XMLHttpRequest对象
	var xhr = new XMLHttpRequest()
	// 设置响应回调
    xhr.onload = function() {
        console.log(JSON.parse(xhr.responseText))
    };
    // 创建HTTP请求，配置请求方法、URL、验证信息
    xhr.open('GET', url)
    // 发送HTTP请求
    xhr.send()
}

const fetchTest = () => {
	ajax('http://10.1.135.18:1801/message')

	fetch('http://10.1.135.18:1801/message', { method: 'GET' })
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			console.log(json)
		})
		.catch((err) => {
			console.log(err)
		})
}

fetchTest()

export default () => <div>fetch</div>