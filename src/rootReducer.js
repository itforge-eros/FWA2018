import { combineReducers } from 'redux';

// import your Module reducers here and combine them
import user from './home/redux';
import navbar from './common/components/Navbar/redux';
import profile from './profile/redux';
import friends from './friend/redux';

const rootReducer = combineReducers({
  user,
  navbar,
  profile,
  friends
});

export default rootReducer;
