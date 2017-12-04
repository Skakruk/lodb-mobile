import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { withRouter, matchPath } from 'react-router-dom';

import Menu from '../../components/Menu';
import createRouter, { routes } from '../../routes';

import './App.css';

class App extends Component {
  state = {
    open: false,
    pageTitle: ''
  };

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  componentWillMount() {
    this.setPageTitle(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setPageTitle(nextProps);
    }
  }

  setPageTitle(props) {
    const route = this._matchRoute(props);

    this.setState({
      pageTitle: route.title,
    });
  }

  _matchRoute(props) {
    return routes.reduce((acc, route) => {
      if (matchPath(props.location.pathname, route)) {
        acc = route;
      }
      return acc;
    }, {});
  }

  handleClose = (open) => this.setState({ open });

  render() {
    const { appConfig } = this.props;
    const { pageTitle } = this.state;

    return (
      <div className="App">
        {
          appConfig.showBar ? (<div>
            <AppBar
              title={pageTitle}
              onLeftIconButtonTouchTap={this.handleToggle}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Menu open={this.state.open} onClose={this.handleClose} />
          </div>) : null
        }
        {createRouter()}
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  appConfig: store.app
});

export default withRouter(connect(mapStoreToProps)(App));
