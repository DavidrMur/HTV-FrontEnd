  
import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getTranscriptTimes } from './transcript';

export function* watchTranscript(){
    yield takeEvery(actionTypes.GET_TRANSCRIPT_TIMES, getTranscriptTimes);
}