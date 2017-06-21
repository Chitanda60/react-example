
// Native Bridge模拟 
let id = 0
let callbacks = {}
let registerFuncs = {}

window.JSBridge = {
	// 调用Native
	invoke: (bridgeName, callback, data) => {
		// 判断环境，获取不同的nativeBridge
		let thisId = id++
		callbacks[thisId] = callback
		nativeBridge.postMessage({
			bridgeName: bridgeName,
			data: data || {},
			callbackId: thisId
		})
	},
	// 接受Native发送消息(调用回馈和JS调用)
	receiveMessage: (msg) => {
		let data = msg.data || {}

		let callbackId = msg.callbackId

		let bridgeName = msg.bridgeName
		let nativeCallbackId = msg.nativeCallbackId

		if (callbackId) {
			// JS调用Native的信息回馈：执行本地回调逻辑
			if (callbacks[callbackId]) {
				callbacks[callbackId](msg.data)
			}
		} else if (bridgeName) {
			// Native调用JS提供的方法
			if (registerFuncs[bridgeName]) {
				var ret
				var flag = false				
				registerFuncs[bridgeName].forEach((callback) => {
					callback(data, (r) => {
						flag = true
						ret = Object.assign(ret, r)
					})
				})
				if (flag) {
					// 回馈Native调用信息
					nativeBridge.postMessage({
						nativeCallbackId: nativeCallbackId,
						ret: ret
					})
				}
			}
		}
	},
	// 注册JS方法供Native调用
	register: (bridgeName, callback) => {
		if (!registerFuncs[bridgeName]) {
			registerFuncs[bridgeName] = []
		}
		// 存储回调
		registerFuncs[bridgeName].push(callback)
	}
}

register('AlertBridge', (data, callback) => {
	callback()

	// 主要逻辑
	// ...	
})