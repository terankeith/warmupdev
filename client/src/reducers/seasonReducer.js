import {
    GET_SEASONS,
    GET_SEASON,
    SEASON_REMOVE_MEMBER,
    SEASON_ADD_MEMBER,
    LOADING_SEASON,
    SET_LOADING_FALSE
} from "../actions/actions";

const initialState = {
    seasons: [],
    season: {},
    members: {},
    loading: false
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
        case SEASON_REMOVE_MEMBER:
            return {
                ...state,
                members: state.season.membership.filter(
                    member => member.member._id !== action.payload
                )
            };
        case SEASON_ADD_MEMBER:
            return {
                ...state
            };
        case LOADING_SEASON:
            return {
                ...state,
                loading: true
            };
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
