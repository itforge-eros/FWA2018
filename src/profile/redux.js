import { firestore, auth } from '../firebase';
import { history } from '../store';
import store from '../store';

const SET_FORM = 'SET_FORM';
const RESET_FORM = 'RESET_FORM';
const RESET_PROFILE = 'RESET_PROFILE';
const SET_FORM_DEFAULT = 'SET_FORM_DEFAULT';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_PENDING = `${SET_PROFILE}_PENDING`;
const SET_PROFILE_FULFILLED = `${SET_PROFILE}_FULFILLED`;
const CREATE_PROFILE = 'CREATE_PROFILE';
const CREATE_PROFILE_PENDING = `${CREATE_PROFILE}_PENDING`;
const CREATE_PROFILE_FULFILLED = `${CREATE_PROFILE}_FULFILLED`;
const EDIT_PROFILE = 'EDIT_PROFILE';
const EDIT_PROFILE_PENDING = `${EDIT_PROFILE}_PENDING`;
const EDIT_PROFILE_FULFILLED = `${EDIT_PROFILE}_FULFILLED`;

const initialState = {
  create: false,
  admin: false,
  approve: false,
  loading: false,
  displayName: '',
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
    prefix: 'นาย',
    firstname: '',
    lastname: '',
    branch: 'IT',
    address: '',
    introduction: '',
    student_id: '',
    year: '1'
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

    case RESET_FORM:
      return { ...state, form: initialState.form };

    case RESET_PROFILE:
      return initialState;

    case SET_PROFILE_PENDING:
      return { ...state, loading: true };

    case SET_PROFILE_FULFILLED:
      return { ...state, ...action.payload, loading: false };

    case CREATE_PROFILE_PENDING:
      return { ...state, loading: true };

    case CREATE_PROFILE_FULFILLED:
      return { ...state, loading: false, create: true, info: action.payload };

    case EDIT_PROFILE_PENDING:
      return { ...state, loading: true };

    case EDIT_PROFILE_FULFILLED:
      return { ...state, loading: false, info: action.payload };

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

export const resetForm = () => ({
  type: RESET_FORM
});

export const setFormDefault = () => ({
  type: SET_FORM_DEFAULT
});

export const resetProfile = () => ({
  type: RESET_PROFILE
});

export const setProfile = (displayName) => ({
  type: SET_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { ...doc.data(), displayName };
      } else {
        return { ...initialState, displayName };
      }
    })
});

export const createProfile = () => ({
  type: CREATE_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(auth.currentUser.uid)
    .set({
      create: true,
      admin: false,
      approve: false,
      displayName: store.getState().profile.displayName,
      info: store.getState().profile.form
    })
    .then(() => {
      return store.getState().profile.form;
    })
});

export const editProfile = () => ({
  type: EDIT_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(auth.currentUser.uid)
    .update({
      info: store.getState().profile.form
    })
    .then(() => {
      history.push('/profile/me');
      alert('Edit successful!');
      return store.getState().profile.form;
    })
});
