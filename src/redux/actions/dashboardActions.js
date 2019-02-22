import * as actionTypes from './_actionsTypes';

export const getRepositories = ({ search }) => ({
    type: actionTypes.GET_REPOSITORIES,
    payload: {
        search
    }
});

export const getRepositoriesSuccess = ({ repositories }) => ({
    type: actionTypes.GET_REPOSITORIES_SUCCESS,
    payload: {
        repositories
    }
});

export const getRepositoriesFailed = () => ({
    type: actionTypes.GET_REPOSITORIES_FAILED
});

export const setSearch = ({ search }) => ({
    type: actionTypes.SET_SEARCH,
    payload: {
        search
    }
});

export const setSort = ({ sort }) => ({
    type: actionTypes.SET_SORT,
    payload: {
        sort
    }
});

export const initRepositories = () => ({
    type: actionTypes.INIT_REPOSITORIES
});



