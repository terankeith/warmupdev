import axios from "axios";
import {
  GET_ERRORS,
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER,
  EDIT_MEMBER
} from "./actions";
//an action is a method that interacts with the db

export const saveMember = (memberData, history, isNew) => dispatch => {
  axios
    .post("/api/members", memberData)
    .then(res => {
      if (isNew) {
        dispatch({
          type: ADD_MEMBER,
          payload: res.data
        });
      } else {
        dispatch({
          type: EDIT_MEMBER,
          payload: res.data
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMember = id => dispatch => {
  axios
    .get(`/api/members/${id}`)
    .then(res =>
      dispatch({
        type: GET_MEMBER,
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

export const deleteMember = id => dispatch => {
  axios
    .delete(`/api/members/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MEMBER,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
