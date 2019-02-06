import axios from "axios";
import { GET_ERRORS, GET_MEMBERS } from "./types";
//an action is a method that interacts with the db

export const saveMember = (memberData, history) => dispatch => {
  axios
    .post("/api/members/add", memberData)
    .then(res => history.push("/forms/regular-forms"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMembers = () => dispatch => {
  axios
    .get("/api/members")
    .then(res =>
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
