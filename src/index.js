import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber500} from 'material-ui/styles/colors';
import createHistory from 'history/createBrowserHistory';
import qhistory from 'qhistory';
import { stringify, parse } from 'qs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";

import store from './store';
import App from './containers/App/App';

import './index.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    appBar: {
        color: amber500
    }
});

const history = qhistory(
    createHistory(),
    stringify,
    parse
);

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history} >
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
