import React, {Component} from 'react';
import {login} from '../../services/userWs';
import {Link} from 'react-router-dom';
import AppContext from '../../AppContext';

export default class AuthContainer extends Component {
    //Use static to be able to use context
    static contextType = AppContext;

    //state === mini database for our class and children
    state = {
        data: {}
    }

    //Listenst for key input and saves it
    handleChange = (event) => {
        const {value, name} = event.target;
        let {data} = this.state;

        data[name] = value;

        this.setState({data});
    }

    //Sends data to DB and validates
    onSubmit = (event) => {
        event.preventDefault();
        login(this.state.data).then((response) => {
            this.setState({data: {}});

            //Save data in local storage so that we don't have to keep submitting requests
            //Basic structure: localStorage.method('key', JSON.stringify({user: 'John'}))
            //If it is an object aor array, we must convert it to plain text.
            localStorage.setItem('user', JSON.stringify(response.data.user));

            //We set the user
            this.context.setUser(response.data.user)

            console.log('Congrats', response);
        }).catch((error) => {
            console.log('An error occurred', error.response)
        });
    }

    render(){
        const {handleChange, onSubmit} = this;
        const {data} = this.state;
        return(
            <section className="uk-section">
                <Link className="uk-text-primary" to="/">
                    Home
                </Link>
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Log In</h3>
                        <form
                            className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
                            onSubmit={onSubmit}
                        >
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input
                                        className="uk-input"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        value = {data['email'] ? data['email'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                    <input
                                        className="uk-input"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        required
                                        value = {data['password'] ? data['password'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-text-meta uk-margin-small-bottom">
                                Don't have an account?{' '}
                                <Link className="uk-text-primary" to="/signup">
                                    Create one!
                                </Link>
                            </div>
                            <button className="uk-button uk-button-primary">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}