import axios from "axios";
import {
    GET_SEASONS,
    GET_ERRORS,
    GET_SEASON,
    SEASON_REMOVE_MEMBER
} from "./actions";
//an action is a method that interacts with the db

export const getSeasons = unitId => dispatch => {
    axios
        .get(`/api/seasons/unit/${unitId}`)
        .then(res =>
            dispatch({
                type: GET_SEASONS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};

export const getSeason = seasonId => dispatch => {
    axios
        .get(`/api/seasons/${seasonId}`)
        .then(res =>
            dispatch({
                type: GET_SEASON,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};

export const removeMemberFromSeason = (seasonId, memberId) => dispatch => {
    axios
        .delete(`/api/seasons/${seasonId}/${memberId}`)
        .then(res =>
            dispatch({
                type: SEASON_REMOVE_MEMBER,
                payload: memberId
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const addMemberToSeason = (seasonId, memberId) => dispatch => {};
