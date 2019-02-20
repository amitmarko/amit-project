import * as actionTypes from '../actions/_actionsTypes';

const INIT_STATE = {
    data: [],
    search: '',
    sort: { value: 'stars', label: 'Stars' },
};

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.SET_SEARCH: {
            const { search } = action.payload;
            return {
                ...state,
                search,
            }
        }
        case actionTypes.SET_SORT: {
            const { sort } = action.payload;
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