
import {
  all
} from 'redux-saga/effects';

import {
  watchFetchRandomUsers
} from './userSaga';

export default function *rootSaga() {
  yield all([
    watchFetchRandomUsers()
  ]);
}
