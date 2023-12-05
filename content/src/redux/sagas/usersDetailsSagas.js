import {call,put,delay,takeEvery} from 'redux-saga/effects';
import { 
    loadUsersDetailsSuccess,
    loadUsersDetailsError,
} from '../actions/usersDetailsActions';
import * as types from '../actions/actionTypes';
import { usersDetailsApi} from '../apis/usersDetailsApi';
export function* onLoadUsersDetailsStartAsync (){
    try {
        const response = yield call(usersDetailsApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersDetailsSuccess(response.data));
        }
        console.log(response.data);
    } catch (error) {
        yield put(loadUsersDetailsError(error.response.data));
    }
}
export function* onLoadUsersDetails(){
    yield takeEvery(types.LOAD_USERS_DETAILS_START, onLoadUsersDetailsStartAsync);
}





    
 

