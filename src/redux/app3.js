
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store'
import routes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const Root = ({store, history}) => (
	<Provider store={store}>
		<Router history={history} routes={routes}></Router>
	</Provider>
)

render(
	<Root store={store} history={history} />,
	document.getElementById('root3')
)