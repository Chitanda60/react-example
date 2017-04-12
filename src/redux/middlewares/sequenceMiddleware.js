
// 多异步串联
// action是个数组
const sequenceMiddleware = ({dispatch, getState}) => (next) => (action) => {	
	if (!Array.isArray(action)) {
		return next(action)
	}

	return action.reduce((result, currAction) => {
		return result.then(() => {
			return 
		})
	}, Promise.resolve())
}