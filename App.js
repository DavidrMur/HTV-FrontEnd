import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { watchTranscript } from './store/sagas/index';
import transcriptReducer from './store/reducers/transcript';
import createSagaMiddleware from 'redux-saga';
import MainPage from './containers/MainPage/MainPage';
import Navigator from './navigation/Navigator'
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  transcript: transcriptReducer
})
const store = createStore(rootReducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTranscript);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    );
  } 
}