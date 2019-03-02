
import {
  createSelector
} from 'reselect';

const usersSelector = state => state.users.users;

export const getUsers = createSelector(
  usersSelector,
  (users) => users
);
