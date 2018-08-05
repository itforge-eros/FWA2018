import axios from 'axios';

const ADD_FRIEND = 'ADD_FRIEND';
const ADD_FRIEND_PENDING = `${ADD_FRIEND}_PENDING`;
const ADD_FRIEND_FULFILLED = `${ADD_FRIEND}_FULFILLED`;
const ADD_FRIEND_REJECTED = `${ADD_FRIEND}_REJECTED`;
const FRIEND_RESET_ERROR = 'FRIEND_RESET_ERROR';

const CHECKIN_QUEST = 'CHECKIN_QUEST';
const CHECKIN_QUEST_PENDING = `${CHECKIN_QUEST}_PENDING`;
const CHECKIN_QUEST_FULFILLED = `${CHECKIN_QUEST}_FULFILLED`;
const CHECKIN_QUEST_REJECTED = `${CHECKIN_QUEST}_REJECTED`;
const CHECKIN_QUEST_RESET_ERROR = 'CHECKIN_QUEST_RESET_ERROR';

const initialState = {
  loading: false,
  friend: {
    error: false,
    message: ''
  },
  quest: {
    error: false,
    message: ''
  }
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND_PENDING:
      return { ...state, loading: true };

    case ADD_FRIEND_FULFILLED:
      return { ...state, loading: false, friend: action.payload };

    case ADD_FRIEND_REJECTED:
      return { ...state, loading: false, friend: action.payload };

    case CHECKIN_QUEST_PENDING:
      return { ...state, loading: true };

    case CHECKIN_QUEST_FULFILLED:
      return { ...state, loading: false, quest: action.payload };

    case CHECKIN_QUEST_REJECTED:
      return { ...state, loading: false, quest: action.payload };

    case CHECKIN_QUEST_RESET_ERROR:
      return { ...state, quest: initialState.quest };

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
    .catch(() => {
      return { error: true, message: 'Something went wrong!' };
    })
});

export const checkinQuest = (data, uid) => ({
  type: CHECKIN_QUEST,
  payload: axios
    .post('/api/quest', {
      id: data,
      requester: uid
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return { error: true, message: 'Something went wrong!' };
    })
});

export const resetQuestError = () => ({
  type: CHECKIN_QUEST_RESET_ERROR
});

export const resetError = () => ({
  type: FRIEND_RESET_ERROR
});
