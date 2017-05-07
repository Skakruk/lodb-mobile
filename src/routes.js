import React from 'react';
import {Route} from 'react-router';
import App from './containers/App/App';
import NewsList from './containers/News/NewsList';
import News from './containers/News/News';
import Catalog from './containers/Catalog/Catalog';
import LatestArrivals from './containers/LatestArrivals/LatestArrivals';

export default function () {
    return (
        <Route component={App}>
            <Route path="/" title="Останні новини" component={NewsList}/>
            <Route path="/news/:id" showBar={false} title="" component={News}/>
            <Route path="/catalog" title="Електронний каталог" component={Catalog}/>
            <Route path="/latest-arrivals" title="Нові надходження книг" component={LatestArrivals}/>
            <Route path="/orderings" title="Запитання онлайн" />
            <Route path="/events" title="Реєстрація на заходи" />
        </Route>
    );
}