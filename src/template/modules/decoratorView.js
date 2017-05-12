
import {Component} from 'react'

import {log} from '~base/decorator'

@log('织夏')
class DecoratorView extends Component {	
	render() {
		return <div>蛇莓</div>
	}
}

export default DecoratorView