import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthContainer from './containers/authContainer/AuthContainer';
import SignupContainer from './containers/authContainer/SignupContainer';
import DashboardContainer from './containers/dashboardContainer/DashboardContainer';
import NewDamageContainer from './containers/dashboardContainer/NewDamageContainer';
import NewShelterContainer from './containers/dashboardContainer/NewShelterContainer';
import AdminEntriesContainer from './containers/dashboardContainer/AdminEntriesContainer';
import HomeContainer from './containers/homeContainer';
import EmergencyContainer from './containers/protocolContainer/EmergencyContainer';
import PreventiveContainer from './containers/protocolContainer/PeventiveContainer';
import VeryReports from './containers/reportsContainer/VerifiedReports';


const Routes = () => (
    <Switch>
        {/* https://www.hipocentro.com/ */}
        <Route exact path = '/' component = {HomeContainer} />
        <Route exact path = '/login' component = {AuthContainer} />
        <Route exact path = '/signup' component = {SignupContainer} />
        <Route exact path = '/protocolo-preventivo' component = {PreventiveContainer}/>
        <Route exact path = '/protocolo-emergencia' component = {EmergencyContainer}/>
        <Route exact path = '/reports-verified' component = {VeryReports}/>
        <Route exact path = '/dashboard' component = {DashboardContainer}/>
        <Route exact path = '/dashboard/new-damage-report' component = {NewDamageContainer}/>
        <Route exact path = '/dashboard/new-shelter-report' component = {NewShelterContainer}/>
        <Route exact path = '/dashboard/entries' component = {AdminEntriesContainer}/>
    </Switch>
);

export default Routes;