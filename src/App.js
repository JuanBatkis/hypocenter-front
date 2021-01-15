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
		user : JSON.parse(localStorage.getItem('user')) || {},
		veryReports:{},
		allreports:{}

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

	setVeryReports = (veryReports)=>{
		this.setState({veryReports})
	};

	setAllReports = (allreports)=>{
		this.state({allreports}})
	};

	addreport = (report) => {
		let {allreports} = this.state;
		//objeto con id y resignamos sus propios valores
		allreports = {[report.id]: report, ...report }
	}

	render(){
		//Deconstruct the state
		const {
			state,
			logout,
			setUser,
			setVeryReports,
			setAllReports,
			addreport
		} = this;
		return (
			<AppContext.Provider
				value={{
					state,
					logout,
					setUser,
					setVeryReports,
					setAllReports,
					addreport
				}}
			>
				<Navbar user={state.user}/>
				<div id="main-content">
					<Routes />
				</div>
				<PlusButton user={state.user} logout={logout}/>
			</AppContext.Provider>
		);
	}

//Por que no funciona
const AppWithRouter = withRouter(App);

export default AppWithRouter;