import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_USER_SCHEDULES } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res });
};

export const createSchedule = formValues => async (dispatch, getState) => {
    const res = await axios.post("/schedule/create", {
        event: {
            userId: getState().auth.googleId,
            title: formValues.title,
            description: formValues.description
        }
    });
    console.log("saved successfully");
    history.push("/dashboard");
};

export const fetchUserSchedules = () => async dispatch => {
    const response = await axios.get("/schedule/fetchAll");
    dispatch({ type: FETCH_USER_SCHEDULES, payload: response.data });
};
