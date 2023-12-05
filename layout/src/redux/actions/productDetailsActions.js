import * as types from './actionTypes';
export const loadProductDetailsStart = () =>({
    type: types.LOAD_PRODUCT_DETAILS_START,
});
//loading user details
export const loadProductDetailsSuccess = (data) =>(
  
    {
        type: types.LOAD_PRODUCT_DETAILS_SUCCESS,
    payload: data,
});

export const loadProductDetailsError = (error) =>({
    type: types.LOAD_PRODUCT_DETAILS_ERROR,
    payload: error,
});


// export default {
//     createPRODUCTtart,
// }