
const userReducer = (state = 'shemei', action) => {
	switch (action.type) {
		case 'SET_NAME':
			return state
			
		default:
			return state
	}
}

export default userReducer