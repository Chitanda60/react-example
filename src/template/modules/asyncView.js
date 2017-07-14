
/**
 * Promise
 */
const promise = () => {
	// let promise = new Promise((resolve, reject) => {
	// 	console.log('promise')
	// 	resolve()
	// })
	// promise.then((resolve, reject) => {
	// 	console.log('resolve')
	// 	return reject;
	// }, () => {
	// 	console.log('reject')
	// }).then(() => {
	// 	console.log('resolve 2')
	// }, () => {
	// 	console.log('reject 2')
	// })

	// let promise = new Promise((resolve, reject) => {

	// 	if (true) {
	// 		resolve()				
	// 	} else {
	// 		reject()
	// 	}
	// })

	// promise.then(() => {
	// 	console.log('resolved')	
	// 	return Promise.reject()
	// }).then(() => {
	// 	console.log('resolved')
	// }).catch(() => {
	// 	console.log('catched')
	// })	

	let promise	= new Promise((resolve, reject) => {
		console.log('promise')
		resolve()
	})

	promise.then(() => {
		console.log('resolve')
		return 'shemei'
		// return new Promise()
	}).then((name) => {
		console.log(name) //log shemei
	}).catch(() => {
		console.log('catched')
	})
}
// promise()

/**
 * Generator
 */
const generator = () => {
	console.log('generator')

	// function* AGenerator() {
	// 	yield 'she';
	// 	yield 'mei';
	// 	yield 'hello';
		
	// 	return {
	// 		1: 'shemei',
	// 		2: 'shemei'
	// 	};
	// }
	// var ag = AGenerator();
	// console.log(ag.next());
	// console.log(ag.next());
	// console.log(ag.next());
	// console.log(ag.next());
	// console.log(ag.next());
	// console.log(ag.next());

	// var myIterable = {}
	// myIterable[Symbol.iterator] = function* () {
	// 	yield 'she';
	// 	yield 'mei';
	// 	yield 'zhi';
	// 	yield 'xia';
	// 	return 'haha';
	// }

	// console.log([...myIterable])

	function* AGenerator() {
		try {
			yield 'she'
			yield 'shr'
			yield 'shy'
		} catch(error) {
			console.log('内部捕获:' + error)
		} finally {				
			yield 'fin'
			yield 'sss'
			yield 'xxx'
		}
		yield 'mei'
		yield 'zhi'
		yield 'xia'
	}
	var ag = AGenerator()
	// console.log([...ag])
	console.log(ag.next())		
	// try {
	// 	ag.throw('a')
	// } catch(error) {
	// 	console.log('外部捕获:' + error)
	// }
	console.log(ag.next())
	console.log(ag.return('over'))
	console.log([...ag])
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())
	console.log(ag.next())

	// var a = {}
	// a[Symbol.iterator] = function() {
	// 	var index = 0;
	//   	return {
	// 		next: function() {
	// 	  		return {value: index++, done: index >= 4 ? true : false};
	// 		}
	//   	};
	// }
	// for(var item of a) {
	// 	console.log(item)
	// }
	// console.log([...a])

	// function* BGenerator () {
	// 	yield console.log('she')
	// 	yield console.log('mei')
	// }
	// var bg = BGenerator()
	// bg.next()
	// bg.next()

}

// generator()

/**
 * async function
 */
const asyncfunc = () => {
	console.log('async function')

	function timeout(name) {
	    return new Promise((resolve) => {
	        setTimeout(() => {	        	
	        	resolve(name)
	        }, 1000)
	    });
	}	
	async function asyncPrint(value) {
	    const x = await timeout('shemei')
	    const y = await timeout('zhixia')
	    console.log(x)
	    console.log(y)
	    console.log(value)

	    return value
	}
	asyncPrint('hello world').then((data) => {
		console.log(data)
	})
}
// asyncfunc()

const AsyncView = () => {
	return <div>Async</div>
}

export default AsyncView