import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Creators as UserActions } from '../ducks/user';

export function* userLogin(action) {
  try {
    const { data } = yield call(api.post, '/sessions', action.payload.credentials);

    yield put(UserActions.userLoginSuccess(data));
    // Salva o token no localStorage do browser.
    localStorage.setItem('@meetapp.usertoken', data.token);
    localStorage.setItem(
      '@meetapp.userinfo',
      JSON.stringify({
        id: data.user.id,
        email: data.user.email,
        first_time: data.user.first_time,
        preference_id: data.user.preference_id,
      }),
    );

    toast.success('Login Successful', {
      position: toast.POSITION.TOP_CENTER,
    });
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
  } catch (err) {
    yield put(UserActions.userLoginFailure(err.response.data.error));
    toast.error(err.response.data.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
