import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: null
        };
    }

    componentWillReceiveProps(newProps) {
        this.setRouteProps(newProps);
    }

    componentWillMount() {
        this.setRouteProps(this.props);
    }

    setRouteProps(props) {
        let activeRoute = props.routes[props.routes.length-1];
        this.setState({
            ...this.state,
            title: activeRoute.title
        });
    }

    handleToggle = () => this.setState({
        ...this.state,
        open: !this.state.open
    });

    handleClose = () => this.setState({
        ...this.state,
        open: false
    });

    render() {
        const {appConfig} = this.props;
        return (
            <div className="App">
                {
                    appConfig.showBar ? (<div>
                        <AppBar
                            onLeftIconButtonTouchTap={this.handleToggle}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <Drawer
                            docked={false}
                            width={200}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <MenuItem containerElement={<Link to="/catalog" />} onTouchTap={this.handleClose}>Електронний каталог</MenuItem>
                            <MenuItem containerElement={<Link to="/" />} onTouchTap={this.handleClose}>Новини</MenuItem>
                            <MenuItem containerElement={<Link to="/latest-arrivals" />} onTouchTap={this.handleClose}>Нові надходження книг</MenuItem>
                            <MenuItem containerElement={<Link to="/orderings" />} onTouchTap={this.handleClose}>Запитання онлайн</MenuItem>
                            <MenuItem containerElement={<Link to="/events" />} onTouchTap={this.handleClose}>Реєстрація на заходи</MenuItem>
                        </Drawer>
                    </div>) : null
                }
                {this.props.children}
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    appConfig: store.app
});

export default connect(mapStoreToProps)(App);
