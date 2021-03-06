import React, {Component} from 'react';
import {login} from '../../services/userWs';
import {Link} from 'react-router-dom';
import AppContext from '../../AppContext';
import { buildNotification } from '../../utils/notification';

export default class AuthContainer extends Component {
    //Use static to be able to use context
    static contextType = AppContext;

    //If user is logged in, he can't log in again
    componentDidMount() {
        const {user} = this.context.state;

        if (Object.keys(user).length) {
            this.props.history.push('/');
        }
    }

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

        //Deconstruct props
        const {history} = this.props;

        login(this.state.data).then((response) => {
            this.setState({data: {}});

            //Save data in local storage so that we don't have to keep submitting requests
            //Basic structure: localStorage.method('key', JSON.stringify({user: 'John'}))
            //If it is an object aor array, we must convert it to plain text.
            localStorage.setItem('user', JSON.stringify(response.data.user));

            //We set the user
            this.context.setUser(response.data.user)

            history.push('/');
        }).catch((error) => {
            //console.log('An error occurred', error.response);
            const data = error.response.data;
            let msg = ''
            if ('validationError' in data) {
                msg = Object.values(data.validationError);
                //console.log('msg 1: ', msg);
            } else {
                msg = Object.values(data);
                //console.log('msg 2: ', msg);
            }
            //recorremos el arreglo y constuimos la notificacion (importar buildNotification)
            //error = al mensaje, "danger" = al color de la notificacion, close = si tiene o no metodo para cerra
            msg.map((msg) => buildNotification(msg,"danger","warning"))
        });
    }

    render(){
        const {handleChange, onSubmit} = this;
        const {data} = this.state;
        return(
            <section className="uk-section auth-containers">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Log In</h3>
                        <form
                            className="uk-form-stacked uk-flex uk-flex-wrap uk-flex-column"
                            onSubmit={onSubmit}
                        >
                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="email">Email</label>
                                <input
                                    className="uk-input"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                    value = {data['email'] ? data['email'] : ''}
                                    placeholder="johndoe@email.com"
                                />
                            </div>

                            <div className="uk-margin-bottom uk-width-2-2@m">
                                    <label className="uk-form-label" for="password">Password</label>
                                    <input
                                        className="uk-input"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        required
                                        value = {data['password'] ? data['password'] : ''}
                                        placeholder="********"
                                    />
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