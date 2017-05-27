
const connect = (mapStateToProps, mapDispatchToProps) => {
	const state = 
	const actions = 

	return (wrappedComponent) => {
		constructor(props) {
			super(props)		
		}

		componentWillMount() {
			console.log('...')
		}

		return class extends Component {
			render() {
				return <wrappedComponent store={state} actons = {actions} />
			}
		}
	}
}

