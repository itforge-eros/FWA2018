import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import your Module reducers here and combine them
import user from './home/redux';

const rootReducer = combineReducers({
  user,
  router: routerReducer
});

export default rootReducer;
