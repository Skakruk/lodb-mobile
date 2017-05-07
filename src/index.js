import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber500} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './index.css';
import {Provider} from "react-redux";
import store from './store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    appBar: {
        color: amber500
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes()}/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
