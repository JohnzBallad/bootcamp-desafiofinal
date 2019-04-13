import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as MeetupActions } from '../ducks/meetup';

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
