import { TEST_DISPATCH } from "../actions/types";

const initialState = {
  member: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        member: action.payload
      };
    default:
      return state;
  }
}
