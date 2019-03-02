
import {
  createSelector
} from 'reselect';

const usersSelector = state => state.users.users; // array
const loadingSelector = state => state.users.loading;
const getNextPage = state => state.users.page;

export const getUsers = createSelector(
  usersSelector,
  (users) => users
);

export const isLoading = createSelector(
  loadingSelector,
  (status) => status
);

export const getPage = createSelector(
  getNextPage,
  (page) => page
);
