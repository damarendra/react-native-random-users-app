
import {
  createSelector
} from 'reselect';

const usersSelector = state => state.users.users;
const loadingSelector = state => state.users.loading;

export const getUsers = createSelector(
  usersSelector,
  (users) => users
);

export const isLoading = createSelector(
  loadingSelector,
  (status) => status
);
