
import fetch from 'isomorphic-fetch'

const fetchData = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => resolve({data: 'RESOLVE'}), 3000)
	} else {
		setTimeout(() => reject({data: 'REJECT'}), 3000)
	}
})

const getMessage = (func) => {
	fetch('http://10.1.133.143:3000/message', { method: 'GET' })
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
	fetch('http://10.1.133.143:3000/date', { method: 'GET' })
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