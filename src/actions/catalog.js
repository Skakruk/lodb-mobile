import api from '../helpers/api';

export const catalogInit = (type) => {
    return api.get(`/catalog/init?db=${type}`)
};

export const termAutocomplete = (type = 'author', term, cookies = []) => {
    return api.get(`/catalog/autocomplete?type=${type}&term=${term}`, {'x-chlib-cookies': cookies.join('||')})
};

export const performSearch = (terms, cookies = []) => {
    return api.post(`/catalog/search`, terms, {'x-chlib-cookies': cookies.join('||')});
};