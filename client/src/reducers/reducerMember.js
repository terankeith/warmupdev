import {
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER,
  EDIT_MEMBER
} from "../actions/actions";

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
    case EDIT_MEMBER:
      return {
        ...state,
        members: state.members.map(member => {
          if (member._id !== action.payload._id) {
            return member;
          } else {
            return {
              ...member,
              ...action.payload
            };
          }
        })
      };
    case GET_MEMBER:
      return {
        ...state,
        member: action.payload
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(member => member._id !== action.payload)
      };
    default:
      return state;
  }
}
