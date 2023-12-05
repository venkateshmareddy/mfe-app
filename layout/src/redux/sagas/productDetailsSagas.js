import {call,put,delay,takeEvery} from 'redux-saga/effects';
import { 
    loadProductDetailsSuccess,
    loadProductDetailsError,
} from '../actions/productDetailsActions';
import * as types from '../actions/actionTypes';
import { productDetailsApi} from '../apis/productDetailsApi';
export function* onLoadProductDetailsStartAsync (){
    try {
        const response = yield call(productDetailsApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadProductDetailsSuccess(response.data));
        }
    } catch (error) {
        yield put(loadProductDetailsError(error.response.data));
    }
}
export function* onLoadProductDetails(){
    yield takeEvery(types.LOAD_PRODUCT_DETAILS_START, onLoadProductDetailsStartAsync);
}





    
 

