import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<h1>Hi, I am Joao 👋</h1>
			<h3>Chose the interview theme</h3>
			<div className="button-group">
				<Link to={`/javascript`}><button className="button">JavaScript</button></Link>
				<Link to={`/react`}><button className="button">React</button></Link>
			</div>
		</div>
	);
};

export default Home;
