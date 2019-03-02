
import {
  takeLatest,
  call,
  put,
  race,
  delay,
  select
} from 'redux-saga/effects';

import { fetchRandomUserApi } from './../../common/api';
import {
  action_types,
  action_creators,
} from './../reducers/usersReducer';
import {
  getPage
} from './../selectors';

// Worker Saga
export function *fetchRandomUsers(
  // action
  ) {
  // const { page } = action.payload;
  const page = yield select(getPage);
  // const page = state.page;
  const { response, timeout } = yield race({
    response: call(fetchRandomUserApi, page),
    timeout: delay(5000)
  });

  if(response) {
    const { res, error } = response;
    if(res)
    {
      console.log(">>>>>Damarendra"+res.data);
      yield put(action_creators.fetch_random_user_success(res.data.results));
    }
    else if(error)
      yield put(action_creators.fetch_random_user_failed("Error Fetching Data!"));
  }
  else if(timeout)
    yield put(action_creators.fetch_random_user_failed("5 Sec Timeout!"));
}

// Watcher Saga
export function *watchFetchRandomUsers() {
  yield takeLatest(action_types.FETCH_RANDOM_USER, fetchRandomUsers);
}
