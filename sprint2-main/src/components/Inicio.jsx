import { Link } from "react-router-dom";

function Inicio() {
	return (
		<div className="inicioPage">
			<h1>Bienvenido a tu banco</h1>
			<h2>Inicio</h2>
			<div className="buttonDiv">
				<button id="button1">
					<Link to="/login">Log In</Link>
				</button>
				<button id="button2">
					<Link to="/signup">Sign up</Link>
				</button>
			</div>
		</div>
	);
}

export default Inicio;
