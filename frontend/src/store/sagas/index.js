import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { userLogin, userCreate, userUpdateProfile } from './user';

import { Types as PreferenceTypes } from '../ducks/preference';
import { setPreference } from './preference';

import { Types as MeetupTypes } from '../ducks/meetup';
import {
  loadEnrolled,
  loadNotEnrolled,
  loadRecommended,
  createMeetup,
  subscribeToMeetup,
} from './meetup';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_CREATE_REQUEST, userCreate),
    takeLatest(UserTypes.USER_UPDATE_PROFILE_REQUEST, userUpdateProfile),
    takeLatest(PreferenceTypes.PREFERENCE_REQUEST, setPreference),
    takeLatest(MeetupTypes.MEETUP_ENROLLED_REQUEST, loadEnrolled),
    takeLatest(MeetupTypes.MEETUP_NOT_ENROLLED_REQUEST, loadNotEnrolled),
    takeLatest(MeetupTypes.MEETUP_RECOMMENDED_REQUEST, loadRecommended),
    takeLatest(MeetupTypes.MEETUP_CREATE_REQUEST, createMeetup),
    takeLatest(MeetupTypes.MEETUP_SUBSCRIBE_REQUEST, subscribeToMeetup),
  ]);
}
