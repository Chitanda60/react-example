
const initialState = {
	data: {}
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return Object.assign({}, state, action.data)

		default:
			return state
	}
}

const store = createStore(reducer)

const Render = () => {
	render(
		<div onClick={() => {
			store.dispatch({type: 'TODO_SOMETHING'})
		}}></div>,
		document.getElementById('root')
	)
}
Render()
store.subscribe(Render)

const Reducer = combineReducers({
	shopInfoReducer,
	shopPriviReducer,
	shopOtherReducer,
	shopQueueReducer
})
const store = createStore(Reducer)

const {shopInfoReducer} = store.getState()


const Render = () => {
	render(
		<Counter store={store} />,
		document.getElementById('root')
	)
}

const Render = () => {
	render(
		<Provider store={store}>
			<Counter />
		</Provider>,
		document.getElementById('root2')
	)
}

const Render = () => {
	render(
		<Provider store={store}>
			<CounterContainer />
		</Provider>,
		document.getElementById('root2')
	)
}

class CounterComponent extends Component {
	constructor(props) {
		super(props)		
	}
	onAdd() {
		this.props.addTodo()
	}

	onDes() {
		this.props.desTodo()
	}

	render() {
		const {calcReducer} = this.props.calcReducer

		return (
			<div>
				<div className="add" onClick={::this.onAdd}>add</div>
				<div className="des" onClick={::this.onDes}>des</div>
			</div>
		)
	}
}
// 内部执行订阅
const mapStateToProps = (state) => {
	return {
		calcReducer: state.calcReducer,
	}
}
// 内部执行分发
const mapDispatchToProps = {
	addTodo: action.addTodo,
	desTodo: action.desTodo,	
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)


getChildContext() {
	return {
		color: 'red'
	}
}

// 将绑定的store作为context
class Provider extends Component {
	getChildContext() {
		return {
			store: this.props.store
		}
	}
	render() {
		return this.props.children
	}
}
Provider.childContextTypes = {
  	store: React.PropTypes.object
}
// connect生成container时会从context中取出context作为自己的store
// this.store = props.store || context.store

const createStore = (reducer) => {
	let state
	let listeners = []

	const getState = () => state

	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach(l => l())
	}

	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			listeners = listeners.filter(l => l !== listener)
		}
	}
}








middleWare1(middleWare2(middleWare3(dispatch)))

const store = createStore(
	Reducer,
	applyMiddleware(
		middleWare1, 
		middleWare2,
		middleWare3
	)
)

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

