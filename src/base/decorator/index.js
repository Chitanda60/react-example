
import {Component} from 'react'

const log = (text) => {	
	// return (wrapped) => {
	// 	wrapped.text = text
	// }
	console.log(text)

	return (Component) => {
		return class extends Component {
			componentWillMount() {
				console.log('decorator: before mount')
			}

			componentDidMount() {
				console.log('decorator: after mount')
			}

			render() {
				return <Component />
			}
		}
	}
}

export {
	log
}