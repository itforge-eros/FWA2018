import { firestore } from '../firebase';

const CHANGE_YEAR = 'CHANGE_YEAR';
const GET_FRIEND = 'GET_FRIEND';
const GET_FRIEND_PENDING = `${GET_FRIEND}_PENDING`;
const GET_FRIEND_FULFILLED = `${GET_FRIEND}_FULFILLED`;
const GET_PROFILE = 'GET_PROFILE';
const GET_PROFILE_PENDING = `${GET_PROFILE}_PENDING`;
const GET_PROFILE_FULFILLED = `${GET_PROFILE}_FULFILLED`;
const SET_FRIEND_TOTAL = 'SET_FRIEND_TOTAL';

const initialState = {
  selectYear: 0,
  loading: false,
  friends: [],
  profile: {},
  total: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  }
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_YEAR:
      return { ...state, selectYear: action.value };

    case GET_FRIEND_PENDING:
      return { ...state, loading: true, friends: [] };

    case GET_FRIEND_FULFILLED:
      return { ...state, loading: false, friends: [...action.payload] };

    case GET_PROFILE_PENDING:
      return state;

    case GET_PROFILE_FULFILLED:
      return { ...state, loading: false, profile: { ...state.profile, ...action.payload } };

    case SET_FRIEND_TOTAL:
      return { ...state, total: action.data };

    default:
      return state;
  }
};

export default action;

export const changeYear = (value) => ({
  type: CHANGE_YEAR,
  value
});

export const getFriends = (uid) => {
  return {
    type: GET_FRIEND,
    payload: firestore
      .collection('profile')
      .doc(uid)
      .collection('friends')
      .get()
      .then((result) => {
        let friends = [];
        result.forEach(async (friend) => {
          friends.push({ id: friend.id, ...friend.data() });
        });
        return friends;
      })
  };
};

export const getProfile = (uid) => ({
  type: GET_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(uid)
    .get()
    .then((result) => ({ [uid]: { ...result.data().info, photoURL: result.data().photoURL } }))
});

export const setTotal = (data) => ({
  type: SET_FRIEND_TOTAL,
  data
});
