import { combineReducers } from "redux";

import reducerMember from "./reducerMember";
import reducerError from "./reducerError";

export default combineReducers({
  member: reducerMember,
  errors: reducerError
});
