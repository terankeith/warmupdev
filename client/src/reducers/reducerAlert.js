import { ALERT_SUCCESS } from "../actions/actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
