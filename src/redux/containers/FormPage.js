
import {Component} from 'react'
import {connect} from 'react-redux'

import {createForm} from 'redux-form-utils'
import {Field, reduxForm} from 'redux-form'

import {formConfig} from '../utils/form_config';

// @createForm(formConfig)
// class FormPage extends Component {
// 	render() {
// 		const {name, gender} = this.props.fields

// 		return (
// 			<div>
// 				<input type="text" name="name" {...name} placeholder="输入名字" />
// 				<select {...gender}>
// 		          <option value="male">male</option>
// 		          <option value="female">female</option>
// 		        </select>
// 			</div>
// 		)
// 	}
// }
// const mapStateToProps = (state) => {	
// 	return {
// 		// redux-form-utils 不是作为props传给FromPage 而是createFrom装饰FromPage后返回的那个组件 该组件有fields
// 		form: state.formReducer.form

// 	}
// }

@reduxForm(formConfig)
class FormPage extends Component {
	render() {		
		return (
			<div>
				<Field component="input" type="text" name="name" placeholder="输入名字" />
				<Field component="select" >
		          <option value="male">male</option>
		          <option value="female">female</option>
		        </Field>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	console.log(state)
	return {
		from: state.formReducer.myForm
	}
}


const mapDispatchToProps = {
	
}
const FormPageContainer = connect(mapStateToProps, mapDispatchToProps)(FormPage)

export default FormPageContainer

