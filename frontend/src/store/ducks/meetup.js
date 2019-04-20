/*
 * Types
 */

export const Types = {
  MEETUP_ENROLLED_REQUEST: 'meetup/ENROLLED_REQUEST',
  MEETUP_ENROLLED_SUCCESS: 'meetup/ENROLLED_SUCCESS',
  MEETUP_ENROLLED_FAILURE: 'meetup/ENROLLED_FAILURE',

  MEETUP_NOT_ENROLLED_REQUEST: 'meetup/NOT_ENROLLED_REQUEST',
  MEETUP_NOT_ENROLLED_SUCCESS: 'meetup/NOT_ENROLLED_SUCCESS',
  MEETUP_NOT_ENROLLED_FAILURE: 'meetup/NOT_ENROLLED_FAILURE',

  MEETUP_RECOMMENDED_REQUEST: 'meetup/RECOMMENDED_REQUEST',
  MEETUP_RECOMMENDED_SUCCESS: 'meetup/RECOMMENDED_SUCCESS',
  MEETUP_RECOMMENDED_FAILURE: 'meetup/RECOMMENDED_FAILURE',

  MEETUP_CREATE_REQUEST: 'meetup/CREATE_REQUEST',
  MEETUP_CREATE_SUCCESS: 'meetup/CREATE_SUCCESS',
  MEETUP_CREATE_FAILURE: 'meetup/CREATE_FAILURE',

  MEETUP_SUBSCRIBE_REQUEST: 'meetup/MEETUP_SUBSCRIBE_REQUEST',
  MEETUP_SUBSCRIBE_SUCCESS: 'meetup/MEETUP_SUBSCRIBE_SUCCESS',
  MEETUP_SUBSCRIBE_FAILURE: 'meetup/MEETUP_SUBSCRIBE_FAILURE',
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  enrolled: [],
  notEnrolled: [],
  recommended: [],

  error: false,

  loading: true,
};

export default function meetup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_ENROLLED_REQUEST:
      return { ...state };
    case Types.MEETUP_ENROLLED_SUCCESS:
      return { ...state, enrolled: action.payload.meetups };
    case Types.MEETUP_ENROLLED_FAILURE:
      return { ...state, error: action.payload.eeror };

    case Types.MEETUP_NOT_ENROLLED_REQUEST:
      return { ...state };
    case Types.MEETUP_NOT_ENROLLED_SUCCESS:
      return { ...state, notEnrolled: action.payload.meetups };
    case Types.MEETUP_NOT_ENROLLED_FAILURE:
      return { ...state, error: action.payload.error };

    case Types.MEETUP_RECOMMENDED_REQUEST:
      return { ...state };
    case Types.MEETUP_RECOMMENDED_SUCCESS:
      return { ...state, recommended: action.payload.meetups };
    case Types.MEETUP_RECOMMENDED_FAILURE:
      return { ...state, error: action.payload.error };

    case Types.MEETUP_CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.MEETUP_CREATE_SUCCESS:
      return {
        ...state,
        notEnrolled: [...state.notEnrolled, action.payload.meetupInfo],
        loading: false,
        error: false,
      };
    case Types.MEETUP_CREATE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case Types.MEETUP_SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.MEETUP_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        enrolled: [...state.enrolled, action.payload.meetupSubscribed],
      };
    case Types.MEETUP_SUBSCRIBE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

/*
 * Actions
 */
export const Creators = {
  loadEnrolledRequest: () => ({
    type: Types.MEETUP_ENROLLED_REQUEST,
  }),

  loadEnrolledSuccess: meetups => ({
    type: Types.MEETUP_ENROLLED_SUCCESS,
    payload: { meetups },
  }),

  loadEnrolledFailure: error => ({
    type: Types.MEETUP_NEXT_FAILURE,
    payload: { error },
  }),

  loadNotEnrolledRequest: () => ({
    type: Types.MEETUP_NOT_ENROLLED_REQUEST,
  }),

  loadNotEnrolledSuccess: meetups => ({
    type: Types.MEETUP_NOT_ENROLLED_SUCCESS,
    payload: { meetups },
  }),

  loadNotEnrolledFailure: error => ({
    type: Types.MEETUP_NOT_ENROLLED_FAILURE,
    payload: { error },
  }),

  loadRecommendedRequest: () => ({
    type: Types.MEETUP_RECOMMENDED_REQUEST,
  }),

  loadRecommendedSuccess: meetups => ({
    type: Types.MEETUP_RECOMMENDED_SUCCESS,
    payload: { meetups },
  }),

  loadRecommendedFailure: error => ({
    type: Types.MEETUP_RECOMMENDED_FAILURE,
    payload: { error },
  }),

  createMeetupRequest: meetupInfo => ({
    type: Types.MEETUP_CREATE_REQUEST,
    payload: { meetupInfo },
  }),

  createMeetupSuccess: meetupInfo => ({
    type: Types.MEETUP_CREATE_SUCCESS,
    payload: { meetupInfo },
  }),

  createMeetupFailure: error => ({
    type: Types.MEETUP_CREATE_FAILURE,
    payload: { error },
  }),

  subscribeRequest: meetupToSub => ({
    type: Types.MEETUP_SUBSCRIBE_REQUEST,
    payload: { meetupToSub },
  }),

  subscribeSuccess: meetupSubscribed => ({
    type: Types.MEETUP_SUBSCRIBE_SUCCESS,
    payload: { meetupSubscribed },
  }),

  subscribeFailure: error => ({
    type: Types.MEETUP_SUBSCRIBE_FAILURE,
    payload: { error },
  }),
};
