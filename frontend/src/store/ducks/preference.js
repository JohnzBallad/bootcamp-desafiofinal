/*
 * Types
 */

export const Types = {
  PREFERENCE_REQUEST: 'preference/PREFERENCE_REQUEST',
  PREFERENCE_SUCCESS: 'preference/PREFERENCE_SUCCESS',
  PREFERENCE_FAILURE: 'preference/PREFERENCE_FAILURE',
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default function preference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PREFERENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.PREFERENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.PREFERENCE_FAILURE:
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
  setPreferenceRequest: preferences => ({
    type: Types.PREFERENCE_REQUEST,
    payload: { preferences },
  }),
  setPreferenceSuccess: data => ({
    type: Types.PREFERENCE_SUCCESS,
    payload: { data },
  }),
  setPreferenceFailure: error => ({
    type: Types.PREFERENCE_FAILURE,
    payload: { error },
  }),
};
