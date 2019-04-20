import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

import api from '../../services/api';
import { Creators as UserActions } from '../ducks/user';

export function* userLogin(action) {
  try {
    const { data } = yield call(api.post, '/sessions', action.payload.credentials);
    // console.log(data);

    // Salva o token no localStorage do browser.
    localStorage.setItem('@meetapp.usertoken', data.token);

    // Salva os dados do usuário no localStorage do browser.
    localStorage.setItem(
      '@meetapp.userinfo',
      JSON.stringify({
        name: data.user.name,
        id: data.user.id,
        email: data.user.email,
        first_time: data.user.first_time,
        preference_id: data.user.preference_id,
        preferences: data.user.Preference,
      }),
    );
    yield put(UserActions.userLoginSuccess(data.user));

    if (data.user.first_time) {
      yield put(push('/welcome'));
    } else {
      yield put(push('/dashboard'));
    }
  } catch (err) {
    yield put(UserActions.userLoginFailure(err.response.data.error));
    toast.error(err.response.data.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* userCreate(action) {
  try {
    const { data } = yield call(api.post, '/signup', action.payload.data);

    yield put(UserActions.userLoginSuccess(data));

    toast.success('Account created', {
      position: toast.POSITION.TOP_CENTER,
    });

    yield put(push('/'));
  } catch (err) {
    yield put(UserActions.userLoginFailure(err.response.data.error));
    toast.error(err.response.data.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* userUpdateProfile(action) {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = yield call(api.put, '/profile', action.payload.profile, { headers });

    // Salva os novos dados do usuário no localStorage do browser.
    localStorage.setItem(
      '@meetapp.userinfo',
      JSON.stringify({
        name: data.user.name,
        id: data.user.id,
        email: data.user.email,
        first_time: data.user.first_time,
        preference_id: data.user.preference_id,
        preferences: data.user.Preference,
      }),
    );
    yield put(UserActions.userLoginSuccess(data));

    toast.success('Profile updated', {
      position: toast.POSITION.TOP_RIGHT,
    });

    yield put(push('/dashboard'));
  } catch (err) {
    yield put(UserActions.userLoginFailure(err.response.data.error));
    toast.error(err.response.data.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
