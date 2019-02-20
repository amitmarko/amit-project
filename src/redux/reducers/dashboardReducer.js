import * as actionTypes from '../actions/_actionsTypes';

const INIT_STATE = {
    data:[],
};

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_REPOSITORIES: {
            return{
                ...state,
            }
        }
        case actionTypes.GET_REPOSITORIES_SUCCESS: {
            return{
                ...state,
            }
        }
        case actionTypes.GET_REPOSITORIES_FAILED: {
            return{
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};