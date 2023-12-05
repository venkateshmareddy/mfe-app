import * as types from '../actions/actionTypes';
const initialState = {
    createUsersdetails: {
        users: [],
        token: null,
        loading: false,
           },
};
const usersDetailsReducer = (state = initialState.createUsersdetails, action)=>{
    switch (action.type) {
            //getting  users details 
            case types.LOAD_USERS_DETAILS_START:
                //       console.log('reducerAction',action);
                // console.log('reducerType',action.type);          
            return {
                ...state,
                loading: true
            };
        case types.LOAD_USERS_DETAILS_SUCCESS:
            // console.log("state");           
            return {
                ...state,
                loading: false ,
                data:action.payload
            };
        case types.LOAD_USERS_DETAILS_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };
            default:
            return state;
    }

}
export default usersDetailsReducer;