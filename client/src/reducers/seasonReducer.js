import { GET_SEASONS, GET_SEASON } from "../actions/actions";

const initialState = {
  seasons: [],
  season: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.payload
      };
    case GET_SEASON:
      return {
        ...state,
        season: action.payload
      };
    default:
      return state;
  }
}
