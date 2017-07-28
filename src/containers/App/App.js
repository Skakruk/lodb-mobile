import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import {connect} from "react-redux";

const menuItems = [{
    url: '/about',
    title: 'Про бібліотеку'
}, {
    url: '/',
    title: 'Новини'
}, {
    url: '/catalog',
    title: 'Електронний каталог'
}, {
    url: '/latest-arrivals',
    title: 'Нові надходження книг'
}, {
    url: '/book-prolongation',
    title: 'Продовження книг онлайн'
}, {
    url: '/chat',
    title: 'Запитання онлайн'
}, {
    url: '/help',
    title: 'Допоможіть своїй бібліотеці'
}, {
    url: '/lost-items',
    title: 'Загублені речі'
}];

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
        let activeRoute = props.routes[props.routes.length - 1];
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
        const {appConfig, children} = this.props;

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
                            {
                                menuItems.map(item => (
                                    <MenuItem
                                        key={ item.url }
                                        onTouchTap={this.handleClose(item.url)}
                                    >
                                        {item.title}
                                    </MenuItem>
                                ))
                            }
                        </Drawer>
                    </div>) : null
                }
                {children}
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    appConfig: store.app
});

export default connect(mapStoreToProps)(App);
