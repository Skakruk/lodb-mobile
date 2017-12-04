import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsList from './containers/News/NewsList';
import News from './containers/News/News';
import Catalog from './containers/Catalog/Catalog';
import LatestArrivals from './containers/LatestArrivals/LatestArrivals';
import Chat from './containers/Chat';
import About from './containers/About';
import BookProlongation from './containers/BookProlongation';
import HelpYourLibrary from './containers/HelpYourLibrary';
import LostItems from './containers/LostItems';

const routes = [
  {
    path: '/',
    title: 'Останні новини',
    component: NewsList,
    exact: true,
  },
  {
    path: '/news/:id',
    title: '',
    component: News,
  },
  {
    path: '/catalog',
    title: 'Електронний каталог',
    component: Catalog,
  },
  {
    path: '/latest-arrivals',
    title: 'Нові надходження книг',
    component: LatestArrivals,
  },
  {
    path: '/book-prolongation',
    title: 'Продовження книг онлайн',
    component: BookProlongation,
  },
  {
    path: '/events',
    title: 'Реєстрація на заходи',
    // component: BookProlongation,
  },
  {
    path: '/chat',
    title: 'Запитання онлайн',
    component: Chat,
  },
  {
    path: '/about',
    title: 'Розклад роботи',
    component: About,
  },
  {
    path: '/help',
    title: 'Допоможіть своїй бібліотеці',
    component: HelpYourLibrary,
  },
  {
    path: '/lost-items',
    title: 'Загублені речі',
    component: LostItems,
  },
];

export {
  routes
};

export default function () {
    return (
        <Switch>
          {
            routes.map(route => (
              <Route key={route.path} {...route} />
            ))
          }
        </Switch>
    );
}
