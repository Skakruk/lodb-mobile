export const SHOW_BAR = 'SHOW_BAR';
export const HIDE_BAR = 'HIDE_BAR';

const initialStore = {
    showBar: true
};

export default function (store = initialStore, action) {
    switch(action.type) {
        case SHOW_BAR:
            return {
                ...store,
                showBar: true
            };
        case HIDE_BAR:
            return {
                ...store,
                showBar: false
            };
        default:
            return store
    }
}