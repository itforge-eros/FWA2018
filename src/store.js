import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import root epics/reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage
};

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();

const epicMiddleware = createEpicMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware),
  applyMiddleware(appRouterMiddleware)
);

export let persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export default persistor;
