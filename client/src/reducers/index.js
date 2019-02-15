import { combineReducers } from "redux";
import authReducer from "./authReducer";
import scheduleReducer from "./scheduleReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    schedule: scheduleReducer,
    form: formReducer
});
