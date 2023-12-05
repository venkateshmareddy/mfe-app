import { combineReducers } from "redux";
import productDetailsReducer from "./productDetailsReducer";
const rootReducer = combineReducers({
    productDetails:productDetailsReducer,
});
export default rootReducer;