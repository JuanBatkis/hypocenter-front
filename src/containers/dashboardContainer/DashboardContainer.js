import React, {Component} from 'react';
import AppContext from '../../AppContext';
import { Link } from "react-router-dom";
import {HorizontalReportCard} from '../../components';
import {getMyDamages} from '../../services/entryDamageWs';
import {getMyShelters} from '../../services/entryShelterWs';

class DashboardContainer extends Component {

    //Use static to be able to use context
    static contextType = AppContext;

    state = {
        damages: [],
        shelters: []
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

    deleteConfirmation = (id) => {
        console.log('test', id);
    }

    render() {
        const {damages, shelters} = this.state;
        return(
            <div className="uk-child-width-1-2" uk-grid>
                <h1>Dashboard</h1>
                <h3>My Entries</h3>
                <ul className="uk-tab" data-uk-tab="{connect:'#tabs-content'}">
                    <li><a href="">Damage Entries</a></li>
                    <li><a href="">Shelter Entries</a></li>
                </ul>
                <ul id="tabs-content" className="uk-switcher uk-margin">
                    <li>
                        {damages.length == 0 ? (
                            <p>No damage entries. <Link to="/dashboard/new-damage-report">Create one?</Link></p>
                        ) : (
                            /*damages.map((damage) => {
                                return(<HorizontalReportCard entry={damage}/>);
                            })*/
                            <HorizontalReportCard entries={damages} func={this.deleteConfirmation}/>
                        )}
                    </li>
                    <li>
                        {shelters.length == 0 ? (
                            <p>No shelter entries. <Link to="/dashboard/new-shelter-report">Create one?</Link></p>
                        ) : (
                            /* shelters.map((shelter) => {
                                return(<HorizontalReportCard entry={shelter}/>);
                            }) */
                            <HorizontalReportCard entries={shelters} func={this.deleteConfirmation}/>
                        )}
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardContainer; 