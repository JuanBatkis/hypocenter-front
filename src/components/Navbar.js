import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, logout }) => {
	return (
		<header>
			<div className="logo-container">
				<Link to="/">
					<img src="logo.png" className="logo-image" alt="logo"/>
					<img src="logo-type.png" className="logo-text" alt="Hypocenter"/>
				</Link>
			</div>
			<nav className="uk-navbar-container" uk-navbar="true">
				<NavLink to="/protocolo-preventivo" className="nav-item" activeClassName="nav-active">Preventive protocol</NavLink>
				<NavLink to="/protocolo-emergencia" className="nav-item" activeClassName="nav-active">Emergency protocol</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;