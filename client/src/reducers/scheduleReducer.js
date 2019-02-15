import { CREATE_SCHEDULE } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case CREATE_SCHEDULE:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}
