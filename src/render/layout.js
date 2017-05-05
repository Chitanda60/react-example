
const React = require('react')

const Iso = require('./iso.js')

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
				{children}
				<script src="/public/bundle.js"></script>
			</body>
		    </html>
		)
	}
}

module.exports = Layout