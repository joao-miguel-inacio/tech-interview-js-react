import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div className="container">
			<h1>Oops, that's a 404</h1>
			<Link to="/">Go back to the Homepage</Link>
		</div>
	)
}

export default NotFound
