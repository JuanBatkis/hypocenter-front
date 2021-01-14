import React, {Component} from 'react';
import AppContext from '../../AppContext';

class DashboardContainer extends Component {

    //Use static to be able to use context
    static contextType = AppContext;

    //Only logged in users can acces
    componentDidMount() {
        const {user} = this.context.state;

        if (!Object.keys(user).length) {
            this.props.history.push('/login');
        }
    }

    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center" uk-grid id="article">
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default DashboardContainer; 