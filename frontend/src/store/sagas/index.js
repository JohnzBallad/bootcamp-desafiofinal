import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { userLogin } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin)]);
}
