import { combineReducers } from "redux";

import memberReducer from "./memberReducer";
import errorReducer from "./errorReducer";
import seasonReducer from "./seasonReducer";

export default combineReducers({
  memberModel: memberReducer,
  errors: errorReducer,
  seasonModel: seasonReducer
});
