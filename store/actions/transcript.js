import * as actionTypes from './actionTypes';

export const getTranscriptTimes = payload => {
    return {
        type: actionTypes.GET_TRANSCRIPT_TIMES,
        payload: payload
    }
}