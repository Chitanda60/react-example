
// redux-form-utils
// import {bindRedux} from 'redux-form-utils'

// import {formConfig} from '../utils/form_config'

// const {state: formState, reducer: formReducer} = bindRedux(formConfig)

// const initialState = {
// 	...formState
// }

// export default (state = initialState, action) => {	
// 	switch (action.type) {
// 		default:
// 			return formReducer(state, action)
// 	}
// }

// redux-form
import {reducer as formReducer} from 'redux-form'

export default formReducer
