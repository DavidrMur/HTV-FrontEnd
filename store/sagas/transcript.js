import * as actions from '../actions';
import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';


export function* getTranscriptTimes (action){
    try {
        console.log('helloworld');
        console.log(action.payload);
        const response = yield axios.get(`https://htv-backend.herokuapp.com/submit?link=${action.payload[0]}&search=${action.payload[1]}`);
        console.log("response");
        console.log(response.data);
        yield put(actions.setTranscriptTimes(response.data));
    } catch (error) {
        console.log(error);
    }
}