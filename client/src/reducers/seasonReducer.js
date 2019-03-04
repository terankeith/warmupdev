import {
    GET_SEASONS,
    GET_SEASON,
    SEASON_REMOVE_MEMBER,
    SEASON_ADD_MEMBER
} from "../actions/actions";

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
        case SEASON_REMOVE_MEMBER:
            return {
                ...state,
                season: {
                    ...state.season,
                    membership: {
                        ...state.season.membership.filter(
                            member => member.member._id !== action.payload
                        )
                    }
                }
            };
        case SEASON_ADD_MEMBER:
            return {
                ...state
            };
        default:
            return state;
    }
}
