import {all, fork} from 'redux-saga/effects';
import { onLoadUsersDetails } from './usersDetailsSagas';
const allSagas = [
    fork(onLoadUsersDetails),
];
export default function* rootSaga() {
    yield all([...allSagas]);
}