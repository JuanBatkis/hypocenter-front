import React, {Component} from 'react';
import './theme/nav-layout.scss';
import './App.css';
import {PlusButton} from './components';
import {Navbar} from './components';
import Routes from './Routes';
import {logout} from './services/userWs';
import AppContext from './AppContext';
import {withRouter} from 'react-router-dom';

class  App extends Component {

	//New state in app
	state = {
		user : JSON.parse(localStorage.getItem('user')) || {}
	}

	//Deletes the cookie and redirectsto login
	logout = () => {
		const { history } = this.props;
		logout().then(() => {
			localStorage.removeItem("user"); // <-- Store data locally
			this.setState({ user: {} });
			history.push("/login"); // <-- Handles redirection
		});
	};

	//This prevents the need to refresh the page on user status change
	setUser = (user) => {
		this.setState({user});
	}

	render(){
		//Deconstruct the state
		const {
			state,
			logout,
			setUser
		} = this;
		return (
			<AppContext.Provider
				value={{
					state,
					logout,
					setUser
				}}
			>
				<Navbar user={state.user} logout={logout}/>
				<div id="main-content">
					<Routes />
				</div>
				<PlusButton user={state.user} logout={logout}/>
			</AppContext.Provider>
		);
	}

}

const AppWithRouter = withRouter(App);

export default AppWithRouter;