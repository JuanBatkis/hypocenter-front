import React, {Component} from 'react';
import {createShelter} from '../../services/entryShelterWs';
import AppContext from '../../AppContext';
import { buildNotification } from '../../utils/notification';
import CreatableSelect from 'react-select/creatable';
import { needOptions, offerOptions } from "./data";

export default class NewShelterContainer extends Component {
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

    handleChangeMultiSelect = (field, value) => {
        let {data} = this.state;

        if (Array.isArray(value)) {
            const values = value.map(x => x.value);
            data[field] = values;
        } else if(value) {
            data[field] = value.value;
        }

        this.setState({data});
    }

    //Sends data to DB and validates
    onSubmit = (event) => {
        event.preventDefault();

        //Deconstruct props
        const {history} = this.props;

        createShelter(this.state.data).then((response) => {
            this.setState({data: {}});
            history.push('/dashboard');
        }).catch((error) => {
            console.log('An error occurred', error.response);
            const data = error.response.data;
            let msg = ''
            if ('validationError' in data) {
                msg = Object.values(data.validationError);
            } else {
                msg = Object.values(data);
            }
            //recorremos el arreglo y constuimos la notificacion (importar buildNotification)
            //error = al mensaje, "danger" = al color de la notificacion, close = si tiene o no metodo para cerra
            msg.map((msg) => buildNotification(msg,"danger","warning"))
        });
    }

    render(){
        const {handleChange, handleChangeMultiSelect, onSubmit} = this;
        const {data} = this.state;

        return(
            <section className="uk-section auth-containers">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-3">
                        <h3>New shelter report</h3>
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
                            <div className="uk-margin-bottom uk-width-2-2@m">
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

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="openingHour">Opening Hour</label>
                                    <input
                                        className="uk-input"
                                        type="time"
                                        name="openingHour"
                                        onChange={handleChange}
                                        required
                                        value = {data['openingHour'] ? data['openingHour'] : ''}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="closingHour">Closing Hour</label>
                                    <input
                                        className="uk-input"
                                        type="time"
                                        name="closingHour"
                                        onChange={handleChange}
                                        required
                                        value = {data['closingHour'] ? data['closingHour'] : ''}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="capacity">Capacity</label>
                                    <input
                                        className="uk-input"
                                        type="number"
                                        name="capacity"
                                        onChange={handleChange}
                                        required
                                        value = {data['capacity'] ? data['capacity'] : 0}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="injured">People Injured</label>
                                    <input
                                        className="uk-input"
                                        type="number"
                                        name="injured"
                                        onChange={handleChange}
                                        required
                                        value = {data['injured'] ? data['injured'] : 0}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m">
                                <div className="uk-width-1-2@m uk-padding-small-right">
                                    <label className="uk-form-label" for="missing">People Missing</label>
                                    <input
                                        className="uk-input"
                                        type="number"
                                        name="missing"
                                        onChange={handleChange}
                                        required
                                        value = {data['missing'] ? data['missing'] : 0}
                                    />
                                </div>

                                <div className="uk-width-1-2@m uk-padding-small-left">
                                    <label className="uk-form-label" for="deceased">People Deceased</label>
                                    <input
                                        className="uk-input"
                                        type="number"
                                        name="deceased"
                                        onChange={handleChange}
                                        required
                                        value = {data['deceased'] ? data['deceased'] : 0}
                                    />
                                </div>
                            </div>

                            <h4>More</h4>
                            {/* <h4 className="uk-margin-remove-bottom">I Need</h4> */}
                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="description">I Need</label>
                                <CreatableSelect
                                    isMulti
                                    onChange={(value) => handleChangeMultiSelect('need', value)}
                                    name="need"
                                    options={needOptions}
                                    className="multi-select"
                                    classNamePrefix="select"
                                />
                            </div>

                            {/* <h4 className="uk-margin-remove-bottom uk-margin-small-top">I Offer</h4> */}
                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="description">I Offer</label>
                                <CreatableSelect
                                    isMulti
                                    onChange={(value) => handleChangeMultiSelect('offer', value)}
                                    name="offer"
                                    options={offerOptions}
                                    className="multi-select"
                                    classNamePrefix="select"
                                />
                            </div>

                            <div className="uk-margin-bottom uk-width-2-2@m">
                                <label className="uk-form-label" for="description">Description</label>
                                <textarea
                                    className="uk-textarea"
                                    id="description"
                                    name="description"
                                    onChange={handleChange}
                                    value = {data['description'] ? data['description'] : ''}
                                    rows="5"
                                >
                                </textarea>
                            </div>

                            <button className="uk-button uk-button-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}