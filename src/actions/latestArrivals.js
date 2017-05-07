import api from '../helpers/api';

export function getLatest() {
    return api.get('/latest-arrivals')
}

