/*
 * Types
 */

export const Types = {
  USER_LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'user/LOGIN_FAILURE',

  USER_CREATE_REQUEST: 'user/CREATE_REQUEST',
  USER_CREATE_SUCCESS: 'user/CREATE_SUCCESS',
  USER_CREATE_FAILURE: 'user/CREATE_FAILURE',

  USER_UPDATE_PROFILE_REQUEST: 'user/UPDATE_PROFILE_REQUEST',
  USER_UPDATE_PROFILE_SUCCESS: 'user/UPDATE_PROFILE_SUCCESS',
  USER_UPDATE_PROFILE_FAILURE: 'user/UPDATE_PROFILE_FAILURE',
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  info: {},
  loading: false,
  error: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload.info,
      };
    case Types.USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case Types.USER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.USER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case Types.USER_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        info: action.payload.info,
      };
    case Types.USER_UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}

/*
 * Actions
 */
export const Creators = {
  userLoginRequest: credentials => ({
    type: Types.USER_LOGIN_REQUEST,
    payload: { credentials },
  }),
  userLoginSuccess: info => ({
    type: Types.USER_LOGIN_SUCCESS,
    payload: { info },
  }),
  userLoginFailure: error => ({
    type: Types.USER_LOGIN_FAILURE,
    payload: { error },
  }),

  userCreateRequest: data => ({
    type: Types.USER_CREATE_REQUEST,
    payload: { data },
  }),
  userCreateSuccess: () => ({
    type: Types.USER_CREATE_SUCCESS,
  }),
  userCreateFailure: error => ({
    type: Types.USER_CREATE_FAILURE,
    payload: { error },
  }),

  updateProfileRequest: profile => ({
    type: Types.USER_UPDATE_PROFILE_REQUEST,
    payload: { profile },
  }),
  updateProfileSuccess: info => ({
    type: Types.USER_UPDATE_PROFILE_SUCCESS,
    payload: { info },
  }),
  updateProfileFailure: error => ({
    type: Types.USER_UPDATE_PROFILE_FAILURE,
    payload: { error },
  }),
};
