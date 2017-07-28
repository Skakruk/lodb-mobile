import React, {Component} from 'react';

const SITE_ID = 'HO09kaR0Kf';

class Chat extends Component {
    constructor(...args) {
        super(...args);

        this.container = null;
        this.intervalId = null;
    }

    componentDidMount() {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', `//code.jivosite.com/script/widget/${SITE_ID}`);
        this.container.appendChild(addScript);
        this.intervalId = setInterval(this.clickToChat, 100)
    }

    componentWillUnmount() {
        document.querySelector('.jivo-c-mobile').remove();
        document.querySelector('jdiv').remove();
        document.querySelector('#jivo-mouse-tracker').remove();
        delete(window.jivo_api);
        delete(window.jivo_config);
        delete(window.jivo_init);
        delete(window.jivo_magic_var);
        delete(window.jivo_version);
    }

    clickToChat = () => {
        const btn = document.querySelector('.button_1O');

        if (btn) {
            clearInterval(this.intervalId);
            btn.click();
        }
    };

    render() {
        return (
            <div ref={el => this.container = el}/>
        )
    }
}

export default Chat;