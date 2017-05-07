import {combineReducers} from "redux";
export const ARTICLES_REQUESTED = "ARTICLES_REQUEST";
export const ARTICLES_SUCCESS = "ARTICLES_SUCCESS";

const initialStore = {
    loading: false,
    list: {}
};

const list = (store = initialStore, action) => {
    switch (action.type) {
        case ARTICLES_REQUESTED:
            return {
                ...store,
                loading: true
            };
        case ARTICLES_SUCCESS:
            return {
                loading: false,
                list: action.payload
            };
        default:
            return store
    }
};

export const LATEST_ARTICLES = "LATEST_ARTICLES";

const latest = (store = {total: 0, ids: []}, action) => {
    switch (action.type) {
        case LATEST_ARTICLES:
            return {
                ids: (store.ids || []).concat(action.payload.ids).filter((itm, idx, self) => self.indexOf(itm) === idx),
                total: action.payload.total
            };
        default:
            return store
    }
};

export default combineReducers({
    list,
    latest
})