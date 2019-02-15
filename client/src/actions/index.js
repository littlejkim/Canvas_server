import axios from "axios";

import { FETCH_USER, CREATE_SCHEDULE } from "./types";
export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res });
};

export const createSchedule = formValues => async dispatch => {
    // const { googleId } = getState().auth;

    const res = await axios.post("/schedule/create", {
        data: {
            title: formValues.title,
            description: formValues.description
        }
    });
    dispatch({ type: CREATE_SCHEDULE, payload: res });
};
