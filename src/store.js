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

// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import rootReducer from './reducers';
// import { createStore, applyMiddleware, compose } from 'redux';

// const initialState = {};
// const middlewares = [thunk];
// let store;

// if (process.env.NODE_ENV === 'development'){
//     middlewares.push(logger);
// }

// if (window.navigator.userAgent.includes("Chrome")){
//     store = createStore(
//         rootReducer, 
//         initialState, 
//         compose(
//             applyMiddleware(...middlewares),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
// } else {
//     store = createStore(
//         rootReducer, 
//         initialState, 
//         compose(applyMiddleware(...middlewares))
//     );
// }

// export default store;