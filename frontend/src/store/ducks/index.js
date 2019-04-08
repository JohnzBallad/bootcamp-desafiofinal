import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import preference from './preference';

export default history => combineReducers({
  router: connectRouter(history),
  user,
  preference,
});
