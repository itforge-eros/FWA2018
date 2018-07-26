import { combineReducers } from 'redux';
import { routerReducer } from 'connected-react-router';

// import your Module reducers here and combine them
import user from './home/redux';
import navbar from './common/components/Navbar/redux';

const rootReducer = combineReducers({
  user,
  navbar,
  router: routerReducer
});

export default rootReducer;
