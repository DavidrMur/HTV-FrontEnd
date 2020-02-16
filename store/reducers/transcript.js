import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ytLink: '',
    transcriptTimes: []
};

const setYtLink = (state, action) => {
    const ytLink = action.payload;
    return {...state, ytLink: ytLink}
}

const setTranscriptTimes = (state, action) => {
    const times = action.payload;
    return {...state, transcriptTimes: times}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_YTLINK:
            return setYtLink(state, action);
        case actionTypes.SET_TRANSCRIPT_TIMES:
            return setTranscriptTimes(state, action);    
        default:
            return state;    
    }
}

export default reducer;