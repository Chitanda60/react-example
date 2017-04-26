
const formConfig = {
  form: 'my-form',
  fields: ['name', 'gender'],
  validate
};

const validate = (values) => {
	if (values.name == null || values.name === '') {
		return {
			name: '请填写名称'
		}
	}
}

export {
	formConfig
}
