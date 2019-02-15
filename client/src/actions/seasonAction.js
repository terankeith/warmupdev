import axios from "axios";
import { GET_SEASONS, GET_ERRORS } from "./actions";
//an action is a method that interacts with the db

export const getSeasons = unitId => dispatch => {
  axios
    .get(`/api/seasons/unit/${unitId}`)
    .then(res =>
      dispatch({
        type: GET_SEASONS,
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
