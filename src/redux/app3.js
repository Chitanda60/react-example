
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './store'
import routes from './routes'

const history = syncHistoryWithStore(browserHistory, store)

const Root = ({store, history}) => (
	<Provider store={store}>
		<Router history={history} routes={routes}></Router>
	</Provider>
)

// render
render(
	<Root store={store} history={history} />,
	document.getElementById('root3')
)
