
const sequenceMiddleware = ({dispatch, getState}) => next => action => {
	if(!Array.isArray(action)) {
		return next(action)
	}

	return action.reduce((result, currAction) => {		
		return result.then(() => {
			if (!currAction) { 
				return Promise.resolve() 
			}

			return Array.isArray(currAction) ? 
				Promise.all(currAction.map(item => dispatch(item))) : dispatch(currAction)
		})
	}, Promise.resolve())
}
// 例子action
const loadDataAction = () => {
	return [
		getCityAction(),		
		(dispatch, state) => {
			dispatch(getWeatherAction(getCityData(state)))
		}
	]
}

export default sequenceMiddleware