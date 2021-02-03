import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
