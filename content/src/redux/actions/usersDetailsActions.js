import * as types from './actionTypes';
export const loadUsersDetailsStart = () =>({
    type: types.LOAD_USERS_DETAILS_START,
});
//loading user details
export const loadUsersDetailsSuccess = (data) =>(
  
    {
        type: types.LOAD_USERS_DETAILS_SUCCESS,
    payload: data,
});

export const loadUsersDetailsError = (error) =>({
    type: types.LOAD_USERS_DETAILS_ERROR,
    payload: error,
});


// export default {
//     createUserStart,
// }