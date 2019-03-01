
import {
  createAction,
  handleActions
} from 'redux-actions';

// Initial State
export const initialState = {
  user: [],
  loading: false
};

// Action Types
export const action_types = {
  FETCH_RANDOM_USER: "USER/FETCH_RANDOM_USER",
  FETCH_RANDOM_USER_SUCCESS: "USER/FETCH_RANDOM_USER_SUCCESS",
  FETCH_RANDOM_USER_FAILED: "USER/FETCH_RANDOM_USER_FAILED"
};

// Action Creators
export const action_creators = {
  fetch_random_user: createAction(
    action_types.FETCH_RANDOM_USER
  ),
  fetch_random_user_success: createAction(
    action_types.FETCH_RANDOM_USER_SUCCESS,
    (user) => ({user})
  ),
  fetch_random_user_failed: createAction(
    action_types.FETCH_RANDOM_USER_FAILED
  )
};

// Reducer
const reducer = handleActions(
  new Map([
    [
      action_creators.fetch_random_user,
      (state) => (state)
    ],
    [
      action_creators.fetch_random_user_success,
      (state) => (state)
    ],
    [
      action_creators.fetch_random_user_failed,
      (state) => (state)
    ]
  ])
);

export default reducer;
