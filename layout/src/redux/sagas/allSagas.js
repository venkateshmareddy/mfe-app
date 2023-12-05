import {all, fork} from 'redux-saga/effects';
import { onLoadProductDetails } from './productDetailsSagas';
const allSagas = [
    fork(onLoadProductDetails),
];
export default function* rootSaga() {
    yield all([...allSagas]);
}