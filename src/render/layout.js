
const React = require('react')

class Layout extends React.Component {
	constructor(props) {
		super(props)		
	}

	render() {
		const {children} = this.props

		return (
			<html>
			<head>
				<title>Render</title>
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