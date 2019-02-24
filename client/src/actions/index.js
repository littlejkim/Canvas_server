import axios from "axios";
import history from "../history";
import {
    FETCH_USER,
    FETCH_USER_SCHEDULES,
    CREATE_SCHEDULE,
    FETCH_SCHEDULE,
    DELETE_SCHEDULE
} from "./types";

export const fetchUser = () => dispatch => {
    axios.get("/api/current_user").then(function(response) {
        dispatch({ type: FETCH_USER, payload: response });
    });
};

export const fetchUserSchedules = () => async dispatch => {
    const response = await axios.get("/schedule/fetchAll");
    dispatch({ type: FETCH_USER_SCHEDULES, payload: response.data || false });
};

export const createSchedule = formValues => async (dispatch, getState) => {
    const response = await axios.post("/schedule/create", {
        event: {
            userId: getState().auth.googleId,
            title: formValues.title,
            description: formValues.description,
            startDate: formValues.startDate,
            endDate: formValues.startDate
        }
    });
    dispatch({ type: CREATE_SCHEDULE, payload: response.data });
    console.log(`ID: ${response.data._id} created successfully`);
    history.push("/dashboard");
};

// export const fetchSchedule = id => async dispatch => {
//     const response = await axios.get(`/schedule/${id}`);
//     dispatch({ type: FETCH_SCHEDULE, payload: response.data });
// };

export const deleteSchedule = id => async dispatch => {
    const response = await axios.delete(`/schedule/delete/${id}`);
    dispatch({ type: DELETE_SCHEDULE, payload: response.data });
    console.log(`ID: ${response.data._id} delete successfully`);
    history.push("/dashboard");
};
