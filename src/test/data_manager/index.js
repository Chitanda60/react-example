
import fetch from 'isomorphic-fetch'

const getMessage = (func) => {
	fetch('http://10.1.135.18:1801/message', { method: 'GET' })
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			func(json)
		})
		.catch((err) => {
			console.log(err)
		})
}
const fetchMessage = () => {
	return new Promise((resolve, reject) => {
		getMessage((json) => {
			resolve({
				name: json.name,
				mess: json.mess
			})
		})
	})
}

export {
	getMessage,
	fetchMessage
}