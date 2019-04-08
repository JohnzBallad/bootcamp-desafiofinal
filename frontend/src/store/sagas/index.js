import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { userLogin, userCreate } from './user';

import { Types as PreferenceTypes } from '../ducks/preference';
import { setPreference } from './preference';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_CREATE_REQUEST, userCreate),
    takeLatest(PreferenceTypes.PREFERENCE_REQUEST, setPreference),
  ]);
}
