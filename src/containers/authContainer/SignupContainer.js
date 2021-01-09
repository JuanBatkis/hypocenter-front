import React, {Component} from 'react';
import {signup} from '../../services/userWs';
import {Link} from 'react-router-dom';
import { buildNotification } from '../../utils/notification';

export default class SignupContainer extends Component {
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

        signup(this.state.data).then((response) => {
            this.setState({data: {}});
            //console.log('Congrats', response);
            history.push('/login');
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
            <section className="uk-section">
                <Link className="uk-text-primary" to="/">
                    Home
                </Link>
                
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-3">
                        <h3>Sign Up</h3>
                        <form
                            className="uk-form-stacked uk-flex uk-flex-wrap uk-flex-column"
                            onSubmit={onSubmit}
                        >
                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="name">Name</label>
                                    <input
                                        className="uk-input"
                                        id="name"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        value = {data['name'] ? data['name'] : ''}
                                        placeholder="John"
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="last_name">Last Name</label>
                                    <input
                                        className="uk-input"
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        onChange={handleChange}
                                        required
                                        value = {data['last_name'] ? data['last_name'] : ''}
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

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

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="phone">Phone</label>
                                    <input
                                        className="uk-input"
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        required
                                        value = {data['phone'] ? data['phone'] : ''}
                                        placeholder="+54 011 2222-2222"
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="organization">Organization</label>
                                    <input
                                        className="uk-input"
                                        type="text"
                                        name="organization"
                                        onChange={handleChange}
                                        value = {data['organization'] ? data['organization'] : ''}
                                        placeholder="O.N.U."
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="password">Password</label>
                                    <input
                                        className="uk-input"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        //required
                                        value = {data['password'] ? data['password'] : ''}
                                        placeholder="********"
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="confirmPassword">Confirm Password</label>
                                    <input
                                        className="uk-input"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        //required
                                        value = {data['confirmPassword'] ? data['confirmPassword'] : ''}
                                        placeholder="********"
                                    />
                                </div>
                            </div>

                            <div className="uk-text-meta uk-margin-small-bottom">
                                Already have an account?{' '}
                                <Link className="uk-text-primary" to="/login">
                                    Log in!
                                </Link>
                            </div>
                            <button className="uk-button uk-button-primary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}