import { FETCH_USER_SCHEDULES } from "../actions/types";
import _ from "lodash";
export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SCHEDULES:
            return { ...state, ..._.mapKeys(action.payload, "googleId") };
        default:
            return state;
    }
}
