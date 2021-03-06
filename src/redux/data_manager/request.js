
import fetch from 'isomorphic-fetch'

const fetchData = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => resolve({data: 'RESOLVE'}), 3000)
	} else {
		setTimeout(() => reject({data: 'REJECT'}), 3000)
	}
})

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

const getDate = (func) => {
	fetch('http://10.1.135.18:1801/date', { method: 'GET' })
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

export {
	fetchData,
	getMessage,
	getDate
}