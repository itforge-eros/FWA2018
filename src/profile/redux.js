import { firestore, auth } from '../firebase';
import { history } from '../store';

const SET_FORM = 'SET_FORM';
const RESET_PROFILE = 'RESET_PROFILE';
const SET_FORM_DEFAULT = 'SET_FORM_DEFAULT';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_PENDING = `${SET_PROFILE}_PENDING`;
const SET_PROFILE_FULFILLED = `${SET_PROFILE}_FULFILLED`;

const initialState = {
  create: false,
  admin: false,
  approve: false,
  loading: false,
  info: {
    nickname: '',
    prefix: '',
    firstname: '',
    lastname: '',
    branch: '',
    address: '',
    introduction: '',
    student_id: '',
    year: ''
  },
  form: {
    nickname: '',
    prefix: '',
    firstname: '',
    lastname: '',
    branch: '',
    address: '',
    introduction: '',
    student_id: '',
    year: ''
  }
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.key]: action.value
        }
      };

    case SET_FORM_DEFAULT:
      return {
        ...state,
        form: state.info
      };

    case RESET_PROFILE:
      return initialState;

    case SET_PROFILE_PENDING:
      return { ...state, loading: true };

    case SET_PROFILE_FULFILLED:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;
  }
};

export default action;

export const setForm = (key, value) => ({
  type: SET_FORM,
  key,
  value
});

export const setFormDefault = () => ({
  type: SET_FORM_DEFAULT
});

export const resetProfile = () => ({
  type: RESET_PROFILE
});

export const setProfile = () => ({
  type: SET_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        history.push('/profile/create');
        return initialState;
      }
    })
});
