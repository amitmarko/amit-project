import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/_actionsTypes';
import * as dashboardAction from '../actions/dashboardActions';
import * as api from '../api/dashboardApi';

function* getRepositories(action) {
    try {
        const { search } = action.payload;
        const result = yield call(api.getRepositories, search);
        yield put(dashboardAction.getRepositoriesSuccess({
            repositories: result.data.items
        }));
    } catch (e) {
        yield put(dashboardAction.getRepositoriesFailed());
    }
}

function* watchGetRepositories() {
    yield takeEvery(actionTypes.GET_REPOSITORIES, getRepositories);
}

const dashboardSagas = [
    fork(watchGetRepositories),
];

export default dashboardSagas;
