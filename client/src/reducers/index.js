import { combineReducers } from "redux";
import authReducer from "./authReducer";
import scheudleReducer from "./scheduleReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    schedule: scheudleReducer,
    form: formReducer
});
