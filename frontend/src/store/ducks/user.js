/*
 * Types
 */

export const Types = {
  USER_LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'user/LOGIN_FAILURE',
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        // data: action.payload.credentials,
      };
    case Types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
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
  userLoginSuccess: data => ({
    type: Types.USER_LOGIN_SUCCESS,
    payload: { data },
  }),
  userLoginFailure: error => ({
    type: Types.USER_LOGIN_FAILURE,
    payload: { error },
  }),
};
