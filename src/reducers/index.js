import {combineReducers} from "redux";
import articles from './articles'
import app from './app';

export default combineReducers({
    articles,
    app
})