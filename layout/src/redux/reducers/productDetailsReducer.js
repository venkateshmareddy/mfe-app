import * as types from '../actions/actionTypes';
const initialState = {
    createProductdetails: {
        products: [],
        token: null,
        loading: false,
           },
};
const productDetailsReducer = (state = initialState.createProductdetails, action)=>{
    switch (action.type) {
            //getting  PRODUCT details 
            case types.LOAD_PRODUCT_DETAILS_START:
                //       console.log('reducerAction',action);
                // console.log('reducerType',action.type);          
            return {
                ...state,
                loading: true
            };
        case types.LOAD_PRODUCT_DETAILS_SUCCESS:
            // console.log("state");           
            return {
                ...state,
                loading: false ,
                data:action.payload
            };
        case types.LOAD_PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };
            default:
            return state;
    }

}
export default productDetailsReducer;