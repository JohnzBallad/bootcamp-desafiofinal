/*
 * Types
 */

export const Types = {
  SEARCH_SHOW: 'search/SHOW',
  SEARCH_HIDE: 'search/HIDE',
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  visible: false,
};

export default function preference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_SHOW:
      return {
        ...state,
        visible: true,
      };
    case Types.SEARCH_HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

/*
 * Actions
 */
export const Creators = {
  showSearchInput: () => ({
    type: Types.SEARCH_SHOW,
  }),

  hideSearchInput: () => ({
    type: Types.SEARCH_HIDE,
  }),
};
