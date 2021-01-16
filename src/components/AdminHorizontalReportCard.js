import React, {Component} from "react";
import dayjs from "dayjs";
import {deleteDamage} from '../services/entryDamageWs';
import {deleteShelter} from '../services/entryShelterWs';
import {updateDamage} from '../services/entryDamageWs';
import {updateShelter} from '../services/entryShelterWs';

class AdminHorizontalReportCard extends Component {

    state = {
        modifiedEntries: {}
    }

    deleteConfirmation = (id, type) => {
        if (window.confirm("Are you sure you want to delete this entry?\nThis action cannot be undone\n")) {
            if (type === 'damage') {
                deleteDamage(id).then((res)=>{
                    window.location.reload(false);
                }).catch((error)=>{
                    console.log(error);
                });
            } else {
                deleteShelter(id).then((res)=>{
                    window.location.reload(false);
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }

    updateEntry = (id, value, type) => {
        let tempVar = this.state.modifiedEntries;
        tempVar[id] = value.target.value;
        this.setState({modifiedEntries: tempVar});

        if (type === 'damage') {
            updateDamage(id, value.target.value).then((res)=>{
            }).catch((error)=>{
                console.log(error);
            });
        } else {
            updateShelter(id, value.target.value).then((res)=>{
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    render({ entries, type } = this.props) {
        const states = ['PENDING', 'APPROVED', 'DENIED']
        return (
            <table className="uk-table uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th>Colaborator</th>
                        <th>Building Name</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th className="uk-table-shrink"></th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry) => {
                        return (
                            <tr>
                                <td>
                                    <p className="uk-margin-remove-bottom uk-inline uk-flex uk-flex-middle">{entry._colaborator.name} {entry._colaborator.last_name} <span className="uk-label uk-margin-small-left">{entry._colaborator.role}</span></p>
                                    <div data-uk-dropdown="pos: bottom-left">
                                        <ul className="uk-margin-remove-bottom uk-margin-small-right">
                                            <li>Organization: <strong>{entry._colaborator.organization}</strong></li>
                                            <li>Email: <strong>{entry._colaborator.email}</strong></li>
                                            <li>Phone: <strong>{entry._colaborator.phone}</strong></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>{entry.building_name}</td>
                                <td>
                                    <select className="uk-select" value={this.state.modifiedEntries[entry._id] ? this.state.modifiedEntries[entry._id] : entry.status} onChange={(value) => this.updateEntry(entry._id, value, type)}>
                                        {states.map((status) => {
                                            return (
                                                <option value={status}>{status}</option>
                                            );
                                        })}
                                    </select>
                                </td>
                                <td>{dayjs(entry.createdAt).format('YYYY-MM-DD')}</td>
                                <td className="uk-flex uk-flex-middle">
                                    <button className="uk-button uk-button-default uk-button-small uk-margin-small-right" type="button" data-uk-toggle={`target: #a${entry._id}`}>More</button>
                                    <button type="button" className="uk-button uk-button-danger uk-button-small uk-flex uk-flex-middle uk-flex-center" onClick={() => {this.deleteConfirmation(entry._id, type)}}>DELETE <span className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-right" uk-icon="trash"></span></button>
                                    <div id={`a${entry._id}`} className="uk-flex-top" data-uk-modal>
                                        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
    
                                            <button className="uk-modal-close-default" type="button" data-uk-close></button>
    
                                            <div>
                                                <h4 className="uk-margin-small-top">Building Name: <strong>{entry.building_name}</strong><span className="uk-label uk-margin-medium-left">{entry.status}</span></h4>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">Location:</h4>
                                                <ul className="uk-margin-remove-top">
                                                    {Object.keys(entry.location).map(function(keyName) {
                                                        return(<li>{keyName.replace(/([a-z])([A-Z])/g, '$1 $2')}: <strong>{entry.location[keyName]}</strong></li>);
                                                    })}
                                                </ul>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">General:</h4>
                                                <ul className="uk-margin-remove-top">
                                                    {Object.keys(entry.general).map(function(keyName) {
                                                        return(<li>{keyName.replace(/([a-z])([A-Z])/g, '$1 $2')}: <strong>{!Array.isArray(entry.general[keyName]) ? entry.general[keyName] : entry.general[keyName].join(', ')}</strong></li>);
                                                    })}
                                                </ul>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">We Need:</h4>
                                                <p className="uk-margin-remove-top">{entry.need.join(', ')}</p>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">We Offer:</h4>
                                                <p className="uk-margin-remove-top">{entry.offer.join(', ')}</p>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">Description:</h4>
                                                <p className="uk-margin-remove-top">{entry.description}</p>
                                                <h4 className="uk-margin-small-top uk-margin-remove-bottom">Date:</h4>
                                                <p className="uk-margin-remove-top">{dayjs(entry.createdAt).format('YYYY-MM-DD')}</p>
                                            </div>
    
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };
}

export default AdminHorizontalReportCard;