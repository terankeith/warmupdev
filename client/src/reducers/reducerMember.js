import { GET_ERRORS, GET_MEMBERS, ADD_MEMBER } from "../actions/actions";

const initialState = {
  members: [],
  member: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [action.payload, ...state.members]
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload
      };
    default:
      return state;
  }
}