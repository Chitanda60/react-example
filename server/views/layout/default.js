
var React = require('react')

class Default extends React.Component {
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
				<div>
					{children}
				</div>
				<script src="./public/js/react.min.js"></script>
				<script src="./public/js/react-dom.min.js"></script>

				<script src="./assets/js/common.js"></script>
				<script src="./assets/js/render.js"></script>
			</body>
		    </html>
		)
	}
}

export default Default