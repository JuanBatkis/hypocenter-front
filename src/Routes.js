import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthContainer from './containers/authContainer/AuthContainer';
import SignupContainer from './containers/authContainer/SignupContainer';
import HomeContainer from './containers/homeContainer';
import EmergencyContainer from './containers/protocolContainer/EmergencyContainer';
import PreventiveContainer from './containers/protocolContainer/PeventiveContainer';
import DamageReportsContainer from './containers/reportContainer/DamageReportsContainer';

const Routes = () => (
    <Switch>
        {/* https://www.dylanpage.com/ */}
        <Route exact path = '/' component = {HomeContainer} />
        <Route exact path = '/login' component = {AuthContainer} />
        <Route exact path = '/signup' component = {SignupContainer} />
        <Route exact path = '/protocolo-preventivo' component = {PreventiveContainer}/>
        <Route exact path = '/protocolo-emergencia' component = {EmergencyContainer}/>
        <Route exact path = '/reportes-daños' component = {DamageReportsContainer}/>
    </Switch>
);

export default Routes;