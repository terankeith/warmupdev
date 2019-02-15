import {
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER,
  EDIT_MEMBER,
  LOADING_MEMBERS,
  ALERT_CLOSE
} from "../actions/actions";

const initialState = {
  members: [],
  member: {},
  loading: false,
  alert: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_MEMBERS:
      return {
        ...state,
        loading: true
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [action.payload, ...state.members],
        alert: true
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
        members: action.payload,
        loading: false
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(member => member._id !== action.payload)
      };
    case ALERT_CLOSE:
      return {
        ...state,
        alert: false
      };
    default:
      return state;
  }
}
