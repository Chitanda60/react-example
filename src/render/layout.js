
const React = require('react')

import Iso from './iso.js'

class Layout extends React.Component {
	constructor(props) {
		super(props)		
	}

	render() {
		const {children} = this.props

		return (
			<html>
			<head>
				<title>Server Render</title>
			</head>			
			<body>
				<div id='root'>					
					{children}
				</div>
				<script src="/public/bundle.js"></script>
			</body>
		    </html>
		)
	}
}

export default Layout