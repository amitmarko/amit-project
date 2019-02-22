import * as actionTypes from '../actions/_actionsTypes';
import storageService from '../../services/storageService';
const storage = new storageService();

const INIT_STATE = {
    data: [],
    isLoad: false,
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
            const repositories = JSON.parse(JSON.stringify(state.data));
            storage.store('sort', sort.value);
            sortRepositories({ value: sort.value, repositories });
            return {
                ...state,
                data: repositories,
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
            const { sort: { value } } = state;
            sortRepositories({ value, repositories });
            return {
                ...state,
                data: repositories,
                isLoad: false,
            }
        }
        case actionTypes.GET_REPOSITORIES_FAILED: {
            return {
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

function sortRepositories({ value, repositories }) {
    if (value === 'stars') {
        value = 'stargazers_count';
    } else if (value === 'update') {
        value = 'updated_at';
    }
    repositories.sort((a, b) => {
        // sort by date
        if (value === 'updated_at') {
            return new Date(a[value]) - new Date(b[value]);
        } else {
            // sort by numbers
            if (a[value] > b[value]) return -1;
            if (a[value] === b[value]) return 0;
            return 1;
        }
    });
}