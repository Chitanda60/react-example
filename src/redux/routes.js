
import {Route} from 'react-router'
import CounterContainer from './containers/CounterContainer'
import UserPage from './containers/UserPage'

export default (
	<Route>
		<Route path="/home" component={CounterContainer}></Route>
		<Route path="/user" component={UserPage}></Route>
	</Route>
)