import { combineReducers } from "redux";
import usersDetailsReducer from "./usersDetailsReducer";
const rootReducer = combineReducers({
    usersDetails:usersDetailsReducer,
});
export default rootReducer;