import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
	const currentPathname = window.location.pathname;
	console.log(user)
	return (
		<header>
			<div className="logo-container">
				<Link to="/">
					<img src="logo.png" className="logo-image" alt="logo"/>
					<img src="logo-type.png" className="logo-text" alt="Hypocenter"/>
				</Link>
			</div>
			{currentPathname.includes('dashboard') ? (
				<nav className="uk-navbar-container" uk-navbar="true">
					<NavLink exact to="/dashboard" className="nav-item" activeClassName="nav-active">Dashboard</NavLink>
					<NavLink to="/dashboard/new-damage-report" className="nav-item" activeClassName="nav-active">New damage report</NavLink>
					{user.role === 'ADMIN' ? (
						<NavLink to="/dashboard/entries" className="nav-item" activeClassName="nav-active">Entries</NavLink>
					) : null}
				</nav>
			) : (
				<nav className="uk-navbar-container" uk-navbar="true">
					<NavLink to="/protocolo-preventivo" className="nav-item" activeClassName="nav-active">Preventive protocol</NavLink>
					<NavLink to="/protocolo-emergencia" className="nav-item" activeClassName="nav-active">Emergency protocol</NavLink>
				</nav>
			)}
		</header>
	);
};

export default Navbar;