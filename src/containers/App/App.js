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
            title: activeRoute.title
        });
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = (link) => () => {
        this.setState({
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
                            width={'80%'}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <MenuItem onTouchTap={this.handleClose("/about")}>Про бібліотеку</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/")}>Новини</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/catalog")}>Електронний каталог</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/latest-arrivals")}>Нові надходження книг</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/orderings")}>Продовження книг онлайн</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/chat")}>Запитання онлайн</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/help")}>Допоможіть своїй бібліотеці</MenuItem>
                            <MenuItem onTouchTap={this.handleClose("/lost-items")}>Загублені речі</MenuItem>
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
