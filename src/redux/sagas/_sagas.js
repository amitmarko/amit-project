import { all } from 'redux-saga/effects';
import DashboardSagas from './dashboardSagas';

export default function* rootSaga() {
    yield all([
        ...DashboardSagas,
    ]);
}