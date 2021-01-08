import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './containers/homeContainer/HomeContainer';

const Routes = () => (
    <Switch>
        {/* https://www.somepage.com/ */}
        <Route exact path = '/' component = {HomeContainer} />
    </Switch>
);

export default Routes;