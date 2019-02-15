import { GET_SEASONS } from "../actions/actions";

const initialState = {
  seasons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.payload
      };
    default:
      return state;
  }
}
