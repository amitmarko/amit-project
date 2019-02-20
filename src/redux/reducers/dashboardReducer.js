import * as actionTypes from '../actions/_actionsTypes';
import storageService from '../../services/storageService';
const storage = new storageService();

const INIT_STATE = {
    data: [],
    search: storage.getItem('search') ? storage.getItem('search') : '',
    sort: storage.getItem('sort') ?
        { value: storage.getItem('sort'), label: storage.getItem('sort') } :
        { value: 'stars', label: 'stars' },
};


export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.SET_SEARCH: {
            const { search } = action.payload;
            storage.store('search', search);
            return {
                ...state,
                search,
            }
        }
        case actionTypes.SET_SORT: {
            const { sort } = action.payload;
            storage.store('sort', sort.value);
            return {
                ...state,
                sort,
            }

        }
        case actionTypes.GET_REPOSITORIES: {
            return {
                ...state,
            }
        }
        case actionTypes.GET_REPOSITORIES_SUCCESS: {
            return {
                ...state,
            }
        }
        case actionTypes.GET_REPOSITORIES_FAILED: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};