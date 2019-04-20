import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import meetup, { Creators as MeetupActions } from '../ducks/meetup';

export function* loadEnrolled() {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = yield call(api.get, '/meetups/enrolled/next', { headers });

    yield put(MeetupActions.loadEnrolledSuccess(data));
  } catch (err) {
    yield put(MeetupActions.loadEnrolledFailure(err.response.data.error));
  }
}

export function* loadNotEnrolled() {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = yield call(api.get, '/meetups/notenrolled', { headers });

    yield put(MeetupActions.loadNotEnrolledSuccess(data));
  } catch (err) {
    yield put(MeetupActions.loadNotEnrolledFailure(err.response.data.error));
  }
}

export function* loadRecommended() {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = yield call(api.get, '/meetups/filter/preferences', { headers });

    yield put(MeetupActions.loadRecommendedSuccess(data));
  } catch (err) {
    yield put(MeetupActions.loadRecommendedFailure(err.response.data.error));
  }
}

export function* createMeetup(action) {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const { meetupInfo } = action.payload;
    const data = new FormData();

    data.append('title', meetupInfo.title);
    data.append('description', meetupInfo.description);
    data.append('location', meetupInfo.location);
    data.append('preferences', JSON.stringify(meetupInfo.preferences));
    data.append('cover', meetupInfo.uploadedFile, meetupInfo.uploadedFile.name);
    data.append('when', meetupInfo.when);

    console.log(JSON.stringify(meetupInfo.preferences));

    const response = yield call(api.post, '/meetups', data, { headers });

    console.tron.log(response.data);
    yield put(MeetupActions.createMeetupSuccess(response.data));

    yield put(push('/dashboard'));
  } catch (err) {
    yield put(MeetupActions.createMeetupFailure(err.response.data.error));
  }
}
