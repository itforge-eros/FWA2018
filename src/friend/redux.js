import { firestore } from '../firebase';

const CHANGE_YEAR = 'CHANGE_YEAR';
const GET_FRIEND = 'GET_FRIEND';
const GET_FRIEND_PENDING = `${GET_FRIEND}_PENDING`;
const GET_FRIEND_FULFILLED = `${GET_FRIEND}_FULFILLED`;
const GET_PROFILE = 'GET_PROFILE';
const GET_PROFILE_PENDING = `${GET_PROFILE}_PENDING`;
const GET_PROFILE_FULFILLED = `${GET_PROFILE}_FULFILLED`;

const initialState = {
  selectYear: 1,
  loading: false,
  friends: [],
  profile: {}
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
          friends.push(friend.id);
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
