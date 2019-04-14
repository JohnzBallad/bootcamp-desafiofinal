import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

import api from '../../services/api';
import { Creators as PreferenceActions } from '../ducks/preference';

export function* setPreference(action) {
  try {
    const token = localStorage.getItem('@meetapp.usertoken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = yield call(api.post, '/welcome', action.payload.preferences, { headers });

    // Obtem as info do usuário que está no localStorage
    const userInfo = JSON.parse(localStorage.getItem('@meetapp.userinfo'));

    // Atualiza as info do usuário com as novas preferências
    userInfo.preferences = data.preference;

    // Salva as info atualizadas no LocalStorage do browser
    localStorage.setItem('@meetapp.userinfo', JSON.stringify(userInfo));

    yield put(PreferenceActions.setPreferenceSuccess(data));

    // Move para o dashboard
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(PreferenceActions.setPreferenceFailure(err.response.data.error));
    toast.error(err.response.data.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
