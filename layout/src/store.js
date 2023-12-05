import {legacy_createStore as createStore} from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './redux/reducers/rootReducer';
import rootSaga from './redux/sagas/allSagas';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
    );
 sagaMiddleware.run(rootSaga);
export default store;
