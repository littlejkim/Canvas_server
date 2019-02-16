import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_USER_SCHEDULES, CREATE_SCHEDULE } from "./types";

export const fetchUser = () => dispatch => {
    axios.get("/api/current_user").then(function(response) {
        dispatch({ type: FETCH_USER, payload: response });
    });
};

export const createSchedule = formValues => async (dispatch, getState) => {
    const response = await axios.post("/schedule/create", {
        event: {
            userId: getState().auth.googleId,
            title: formValues.title,
            description: formValues.description
        }
    });
    dispatch({ type: CREATE_SCHEDULE, payload: response.data });
    console.log("saved successfully");
    history.push("/dashboard");
};

export const fetchUserSchedules = () => async dispatch => {
    const response = await axios.get("/schedule/fetchAll");
    dispatch({ type: FETCH_USER_SCHEDULES, payload: response.data || false });
};
