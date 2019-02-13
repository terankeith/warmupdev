import { combineReducers } from "redux";

import reducerMember from "./reducerMember";
import reducerError from "./reducerError";
//import reducerAlert from "./reducerError";

export default combineReducers({
  modelMember: reducerMember,
  errors: reducerError
});
