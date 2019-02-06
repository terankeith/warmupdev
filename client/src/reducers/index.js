import { combineReducers } from "redux";

import memberReducer from "./memberReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  member: memberReducer,
  errors: errorReducer
});
