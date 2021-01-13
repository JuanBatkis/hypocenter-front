import React, {Component} from 'react';
import {createDamage} from '../../services/entryDamageWs';
import {Link} from 'react-router-dom';
import AppContext from '../../AppContext';
import { buildNotification } from '../../utils/notification';

import CreatableSelect from 'react-select/creatable';

export default class NewDamageContainer extends Component {
    //Use static to be able to use context
    static contextType = AppContext;

    //Only logged in users can acces
    componentDidMount() {
        const {user} = this.context.state;

        if (!Object.keys(user).length) {
            this.props.history.push('/login');
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

    handleChangeMulti = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    //Sends data to DB and validates
    onSubmit = (event) => {
        event.preventDefault();

        //Deconstruct props
        const {history} = this.props;

        createDamage(this.state.data).then((response) => {
            this.setState({data: {}});
            //console.log('Congrats', response);
            history.push('/dashboard');
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
        const {handleChange, handleChangeMulti, onSubmit} = this;
        const {data} = this.state;
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];
        return(
            <section className="uk-section auth-containers">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-3">
                        <h3>New damage report</h3>
                        <form
                            className="uk-form-stacked uk-flex uk-flex-wrap uk-flex-column"
                            onSubmit={onSubmit}
                        >
                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="building_name">Building Name</label>
                                <input
                                    className="uk-input"
                                    type="text"
                                    name="building_name"
                                    onChange={handleChange}
                                    required
                                    value = {data['building_name'] ? data['building_name'] : ''}
                                />
                            </div>

                            <h4>Location</h4>
                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="city">City</label>
                                    <input
                                        className="uk-input"
                                        id="city"
                                        type="text"
                                        name="city"
                                        onChange={handleChange}
                                        required
                                        value = {data['city'] ? data['city'] : ''}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="state">State</label>
                                    <input
                                        className="uk-input"
                                        id="state"
                                        type="text"
                                        name="state"
                                        onChange={handleChange}
                                        required
                                        value = {data['state'] ? data['state'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="municipality">Municipality</label>
                                    <input
                                        className="uk-input"
                                        id="municipality"
                                        type="text"
                                        name="municipality"
                                        onChange={handleChange}
                                        required
                                        value = {data['municipality'] ? data['municipality'] : ''}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="zipCode">Zip Code</label>
                                    <input
                                        className="uk-input"
                                        id="zipCode"
                                        type="text"
                                        name="zipCode"
                                        onChange={handleChange}
                                        required
                                        value = {data['zipCode'] ? data['zipCode'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="streetName">Street Name</label>
                                    <input
                                        className="uk-input"
                                        id="streetName"
                                        type="text"
                                        name="streetName"
                                        onChange={handleChange}
                                        required
                                        value = {data['streetName'] ? data['streetName'] : ''}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="references">References</label>
                                    <input
                                        className="uk-input"
                                        id="references"
                                        type="text"
                                        name="references"
                                        onChange={handleChange}
                                        required
                                        value = {data['references'] ? data['references'] : ''}
                                    />
                                </div>
                            </div>

                            <h4>General</h4>
                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="phone">Contact Phone</label>
                                    <input
                                        className="uk-input"
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        required
                                        value = {data['phone'] ? data['phone'] : ''}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="references">References</label>
                                    <input
                                        className="uk-input"
                                        id="references"
                                        type="text"
                                        name="references"
                                        onChange={handleChange}
                                        required
                                        value = {data['references'] ? data['references'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="email">Email</label>
                                <CreatableSelect
                                    isMulti
                                    onChange={handleChangeMulti}
                                    name="colors"
                                    options={options}
                                    className="multi-select"
                                    classNamePrefix="select"
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