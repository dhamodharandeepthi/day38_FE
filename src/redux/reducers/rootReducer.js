import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    // PUT REDUCERS HERE
    user: userReducer,
    posts: postReducer,
});

export default rootReducer;