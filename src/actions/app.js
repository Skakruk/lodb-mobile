import {SHOW_BAR, HIDE_BAR} from '../reducers/app'

export function showBar() {
    return dispatch => dispatch({type: SHOW_BAR})
}

export function hideBar() {
    return dispatch => dispatch({type: HIDE_BAR})
}