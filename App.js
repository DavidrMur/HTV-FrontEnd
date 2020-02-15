import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { watchSaga } from './store/sagas/index';
import someReducer from './store/reducers/parking';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer: someReducer
})
const store = createStore(rootReducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    );
  } 
}