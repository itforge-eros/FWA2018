import axios from 'axios';

const ADD_FRIEND = 'ADD_FRIEND';
const ADD_FRIEND_PENDING = `${ADD_FRIEND}_PENDING`;
const ADD_FRIEND_FULFILLED = `${ADD_FRIEND}_FULFILLED`;
const FRIEND_RESET_ERROR = 'FRIEND_RESET_ERROR';

const initialState = {
  loading: false,
  friend: {
    error: false,
    message: ''
  },
  quest: {}
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND_PENDING:
      return { ...state, loading: true };

    case ADD_FRIEND_FULFILLED:
      return { ...state, loading: false, friend: action.payload };

    case FRIEND_RESET_ERROR:
      return { ...state, friend: initialState.friend };

    default:
      return state;
  }
};

export default action;

export const addFriend = (data, uid) => ({
  type: ADD_FRIEND,
  payload: axios
    .post('/api/friend', {
      id: data,
      requester: uid
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      Promise.reject();
    })
});

export const resetError = () => ({
  type: FRIEND_RESET_ERROR
});
