import {
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    GET_MEMBER,
    UPDATED_MEMBER,
    LOADING_MEMBERS,
    ALERT_CLOSE,
    SET_LOADING_FALSE
} from "../actions/actions";

const initialState = {
    members: [],
    member: {},
    loading: false,
    alert: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING_MEMBERS:
            return {
                ...state,
                loading: true
            };
        case ADD_MEMBER:
            return {
                ...state,
                members: [action.payload, ...state.members],
                alert: true
            };
        case UPDATED_MEMBER:
            return {
                ...state,
                members: state.members.map(member => {
                    if (member._id !== action.payload._id) {
                        return member;
                    } else {
                        return {
                            ...member,
                            ...action.payload
                        };
                    }
                })
            };
        case GET_MEMBER:
            return {
                ...state,
                member: action.payload
            };
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload
            };
        case DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter(
                    member => member._id !== action.payload
                )
            };
        case ALERT_CLOSE:
            return {
                ...state,
                alert: false
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
