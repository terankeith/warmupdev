import { ALERT_OPEN, ALERT_CLOSE } from "../actions/actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ALERT_OPEN:
      return true;
    case ALERT_CLOSE:
      return false;
    default:
      return state;
  }
}
