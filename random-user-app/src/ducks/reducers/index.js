
import {
  combineReducers
} from 'redux';

import { default as usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
