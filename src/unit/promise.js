
const func1 = () => {
	setTimeout(() => {
		console.log('func1')			
	}, 2000)
}

const func2 = () => {
	setTimeout(() => {
		console.log('func2')
	}, 2000)
}

const func3 = () => {
	setTimeout(() => {
		console.log('func3')
	}, 2000)
}

const list = [func1, func2, func3]

list.reduce((result, currFunc) => {
	return result.then(() => {
		currFunc()
		// return Promise.resolve(currFunc)
	})
}, Promise.resolve())

// 多异步串联
const getCityAction = () => {
	return {
		url: '',
		params: {},
		types: [null, 'GET_CITY_SUCCESS', null]
	}
}
const getWeatherAction = () => {
	return {
		url: '',
		params: {},
		types: [null, 'GET_WEATHER_SUCCESS', null]
	}
}
const loadDataAction = () => {
	return [
		getCityAction(),		
		(dispatch, state) => {
			dispatch(getWeatherAction(getCityData(state)))
		}
	]
}