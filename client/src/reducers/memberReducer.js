import { GET_ERRORS, GET_MEMBERS } from "../actions/types";

const initialState = {
  member: {},
  members: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload
      };
    default:
      return state;
  }
}
