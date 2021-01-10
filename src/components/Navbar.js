import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
	return (
		<header>
			<div className="logo-container">
				<Link to="/">
					<img src="logo.png" alt="logo"/>
					<img src="logo-type.png" alt="Hypocenter"/>
				</Link>
			</div>
			<nav className="uk-navbar-container" uk-navbar="true">
				<Link to="/login">Login</Link>
			</nav>
		</header>
	);
};

export default Navbar;