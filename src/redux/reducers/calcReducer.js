
const calcReducer = (state = 1, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state + 1

		case 'DES_TODO':
			return state - 1

		case 'SHOW_TODO':
			return state

		case 'HIDE_TODO':
			return state

		case 'SEARCH_TODO':
			return state

		default:
			return state
	}
}

export default calcReducer