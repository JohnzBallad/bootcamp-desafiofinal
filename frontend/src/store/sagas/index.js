import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { userLogin, userCreate } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_CREATE_REQUEST, userCreate),
  ]);
}
