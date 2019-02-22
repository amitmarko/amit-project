import * as actionTypes from '../actions/_actionsTypes';
import storageService from '../../services/storageService';
const storage = new storageService();

const INIT_STATE = {
    data: [],
    isLoad: false,
    searchEmpty: false,
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
                isLoad: true,
            }
        }
        case actionTypes.GET_REPOSITORIES_SUCCESS: {
            const { repositories } = action.payload;
            const searchEmpty = repositories.length === 0;
            return {
                ...state,
                data: repositories,
                isLoad: false,
                searchEmpty,
            }
        }
        case actionTypes.GET_REPOSITORIES_FAILED: {
            return {
                searchEmpty: true,
                ...state,
            }
        }
        case actionTypes.INIT_REPOSITORIES: {
            return {
                ...state,
                data: [],
            }
        }
        default: {
            return state;
        }
    }
};