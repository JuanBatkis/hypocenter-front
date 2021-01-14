import React from "react";
import { Link } from "react-router-dom";

const PlusButton = ({ user, logout }) => {
	return (
        <div id="plusBttn" className="uk-inline">
            <button className="uk-button uk-button-default" type="button"><span uk-icon="plus"></span></button>
            <div uk-dropdown="pos: top-right; mode: click; animation: uk-animation-slide-bottom-small; duration: 300">
                {user._id ? (
                    <ul className="uk-nav uk-dropdown-nav">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li onClick={logout}><Link to="#">Logout</Link></li>
                    </ul>
                ) : (
                    <ul className="uk-nav uk-dropdown-nav">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
	);
};

export default PlusButton;