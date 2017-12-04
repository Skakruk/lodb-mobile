import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom';

import logoSrc from './assets/head_logo_uk.png';
import c from './Menu.scss';

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

function Menu({ open, onClose, history }) {
  const handleItemClick = (link) => () => {
    history.push(link);
    onClose(false);
  };

  return (
    <Drawer
      docked={false}
      width={'80%'}
      open={open}
      onRequestChange={onClose}
    >
      <div className={c.logo}>
        <img src={logoSrc} />
      </div>
      {
        menuItems.map(item => (
          <MenuItem
            key={item.url}
            onTouchTap={handleItemClick(item.url)}
          >
            {item.title}
          </MenuItem>
        ))
      }
      <hr />
      <a className={c.redirect} href="https://lodb.org.ua/">Перейти на повну версію</a>
    </Drawer>
  )
}

export default withRouter(Menu);
