import * as actionTypes from './_actionsTypes';

export const getRepositories = ({ text }) => ({
    type: actionTypes.GET_REPOSITORIES,
    payload: {
        text
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

