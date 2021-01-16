import React, {Component} from 'react';
import AppContext from '../../AppContext';
import { Link } from "react-router-dom";
import {AdminHorizontalReportCard} from '../../components';
import {getMyDamages} from '../../services/entryDamageWs';
import {getMyShelters} from '../../services/entryShelterWs';
import Select from 'react-select';
import { filterOptions } from "./data";

class AdminEntriesContainer extends Component {

    //Use static to be able to use context
    static contextType = AppContext;

    state = {
        damages: [],
        shelters: [],
        data: {}
    }

    //Only logged in users can acces
    componentDidMount() {
        const {user} = this.context.state;

        if (!Object.keys(user).length) {
            this.props.history.push('/login');
        }

        getMyDamages().then((res)=>{
            //console.log(res.data.result);
            this.setState({damages: res.data.result});
        }).catch((error)=>{
            console.log(error);
        });

        getMyShelters().then((res)=>{
            //console.log(res.data.result);
            this.setState({shelters: res.data.result});
        }).catch((error)=>{
            console.log(error);
        });
    }

    handleChangeMultiSelect = (field, value) => {
        let {data} = this.state;

        if (Array.isArray(value)) {
            const values = value.map(x => x.value);
            data[field] = values;
        } else {
            data[field] = value.value;
        }

        getMyDamages().then((res)=>{
            this.setState({damages: res.data.result});
        }).catch((error)=>{
            console.log(error);
        });

        getMyShelters().then((res)=>{
            this.setState({shelters: res.data.result});
        }).catch((error)=>{
            console.log(error);
        });

        this.setState({data});
    }

    render() {
        const {handleChangeMultiSelect} = this;
        const {damages, shelters} = this.state;
        console.log(damages);
        return(
            <div className="uk-child-width-1-1 uk-margin-medium-left uk-margin-medium-right" uk-grid>
                <h1>User Entries</h1>
                <h3 className="uk-margin-remove-bottom">Show:</h3>
                <Select
                    onChange={(value) => handleChangeMultiSelect('filter', value)}
                    name="filter"
                    options={filterOptions}
                    className="select"
                    classNamePrefix="select"
                    required
                />
                <ul className="uk-tab uk-margin-remove-right uk-margin-remove-left" data-uk-tab="{connect:'#tabs-content'}">
                    <li><a href="">Damage Entries</a></li>
                    <li><a href="">Shelter Entries</a></li>
                </ul>
                <ul id="tabs-content" className="uk-switcher uk-margin">
                    <li>
                        {damages.length === 0 ? (
                            <p>No damage entries. <Link to="/dashboard/new-damage-report">Create one?</Link></p>
                        ) : (
                            <AdminHorizontalReportCard entries={damages} type={'damage'}/>
                        )}
                    </li>
                    <li>
                        {shelters.length === 0 ? (
                            <p>No shelter entries. <Link to="/dashboard/new-shelter-report">Create one?</Link></p>
                        ) : (
                            <AdminHorizontalReportCard entries={shelters} type={'shelter'}/>
                        )}
                    </li>
                </ul>
            </div>
        )
    }
}

export default AdminEntriesContainer;