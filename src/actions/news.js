import api from '../helpers/api';
import {article} from '../schemas';
import {normalize} from 'normalizr';

import {ARTICLES_REQUESTED, ARTICLES_SUCCESS, LATEST_ARTICLES} from '../reducers/articles';

export function latestNews() {
    return dispatch => {
        dispatch({type: ARTICLES_REQUESTED});

        api.get(`/news?offset=0&limit=10`).then(response => {
            let data = normalize(response.items, [article]);
            dispatch({
                type: ARTICLES_SUCCESS,
                payload: data.entities.article
            });
            dispatch({
                type: LATEST_ARTICLES,
                payload: {
                    ids: data.result,
                    total: response.total
                }
            })
        })
    }
}

export function articleById(id) {
    return dispatch => {
        dispatch({type: ARTICLES_REQUESTED});

        api.get(`/news/${id}`).then(response => {
            let data = normalize(response, article);
            dispatch({
                type: ARTICLES_SUCCESS,
                payload: data.entities.article
            });
        })
    }
}