import axios from "axios";
import { GET_ERRORS } from "./types";
export const saveMember = memberData => dispatch => {
  axios
    .post("/api/members/add", memberData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
