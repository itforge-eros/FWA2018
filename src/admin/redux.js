import { firestore } from '../firebase';
import { history } from '../store';
import store from '../store';

const ADMIN_SET_FORM = 'ADMIN_SET_FORM';
const ADMIN_RESET_FORM = 'ADMIN_RESET_FORM';
const ADMIN_RESET_PROFILE = 'ADMIN_RESET_PROFILE';
const ADMIN_SET_FORM_DEFAULT = 'ADMIN_SET_FORM_DEFAULT';
const ADMIN_SET_FORM_DEFAULT_PENDING = `${ADMIN_SET_FORM_DEFAULT}_PENDING`;
const ADMIN_SET_FORM_DEFAULT_FULFILLED = `${ADMIN_SET_FORM_DEFAULT}_FULFILLED`;
const ADMIN_EDIT_PROFILE = 'ADMIN_EDIT_PROFILE';
const ADMIN_EDIT_PROFILE_PENDING = `${ADMIN_EDIT_PROFILE}_PENDING`;
const ADMIN_EDIT_PROFILE_FULFILLED = `${ADMIN_EDIT_PROFILE}_FULFILLED`;

const initialState = {
  create: false,
  admin: false,
  approve: false,
  loading: false,
  displayName: '',
  photoURL: '',
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
    case ADMIN_SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.key]: action.value
        }
      };

    case ADMIN_SET_FORM_DEFAULT:
      return {
        ...state,
        form: state.info
      };

    case ADMIN_RESET_FORM:
      return { ...state, form: initialState.form };

    case ADMIN_RESET_PROFILE:
      return initialState;

    case ADMIN_SET_FORM_DEFAULT_PENDING:
      return { ...state, loading: true };

    case ADMIN_SET_FORM_DEFAULT_FULFILLED:
      return { ...state, ...action.payload, form: { ...action.payload.info }, loading: false };

    case ADMIN_EDIT_PROFILE_PENDING:
      return { ...state, loading: true };

    case ADMIN_EDIT_PROFILE_FULFILLED:
      return { ...state, loading: false, info: action.payload };

    default:
      return state;
  }
};

export default action;

export const setForm = (key, value) => ({
  type: ADMIN_SET_FORM,
  key,
  value
});

export const resetForm = () => ({
  type: ADMIN_RESET_FORM
});

export const setFormDefault = (id) => ({
  type: ADMIN_SET_FORM_DEFAULT,
  payload: firestore
    .collection('profile')
    .doc(id)
    .get()
    .then((doc) => {
      return doc.data();
    })
});

export const resetProfile = () => ({
  type: ADMIN_RESET_PROFILE
});

export const editProfile = (uid) => ({
  type: ADMIN_EDIT_PROFILE,
  payload: firestore
    .collection('profile')
    .doc(uid)
    .update({
      info: store.getState().admin.form
    })
    .then(() => {
      history.push(`/admin/user/detail/${uid}`);
      alert('Edit successful!');
      return store.getState().admin.form;
    })
});
