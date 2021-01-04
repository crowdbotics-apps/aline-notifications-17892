import * as types from './constants';

const initialState = {
  api: {
    isFetching: false,
  },
  notifications: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.NOTIFICATION_LIST:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      });
    case types.NOTIFICATION_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        notifications: [...state.notifications, action.response.data],
      });
    case types.NOTIFICATION_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response,
        },
      });
    default:
      return state;
  }
}
