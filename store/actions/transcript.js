import * as actionTypes from './actionTypes';

export const getTranscriptTimes = payload => {
    return {
        type: actionTypes.GET_TRANSCRIPT_TIMES,
        payload: payload
    }
}

export const setTranscriptTimes = payload => {
    return {
        type: actionTypes.SET_TRANSCRIPT_TIMES,
        payload: payload
    }
}

export const setYtLink = payload => {
    return {
        type: actionTypes.SET_YTLINK,
        payload: payload
    }
}