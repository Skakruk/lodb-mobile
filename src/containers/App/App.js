import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
    context = {
        router: React.PropTypes.object
    };
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

    handleClose = (link) => () => {
        this.setState({
            ...this.state,
            open: false
        }, () => {
            this.props.router.push(link);
        });
    };

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
                            <MenuItem onTouchTap={this.handleClose("/catalog")}>Електронний каталог</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/")}>Новини</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/latest-arrivals")}>Нові надходження книг</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/orderings")}>Запитання онлайн</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/events")}>Реєстрація на заходи</MenuItem>
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
