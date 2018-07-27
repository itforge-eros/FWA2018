import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware';

// Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import root reducer
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  connectRouter(history)(persistedReducer),
  composeEnhancers(applyMiddleware(promiseMiddleware(appRouterMiddleware)))
);

export let persistor = persistStore(store);

export default store;
