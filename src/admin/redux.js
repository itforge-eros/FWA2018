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
const ADMIN_SET_QUEST_FORM = 'ADMIN_SET_QUEST_FORM';
const ADMIN_EDIT_QUEST_FORM = 'ADMIN_EDIT_QUEST_FORM';
const ADMIN_SET_LOADING = 'ADMIN_SET_LOADING';

const initialState = {
  create: false,
  admin: false,
  approve: false,
  loading: true,
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
  },
  quest: {
    name: '',
    open: false,
    expire: '',
    hidden: false
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
      return {
        ...state,
        ...action.payload,
        form: { ...action.payload.info, friend: action.payload.friend },
        loading: false
      };

    case ADMIN_EDIT_PROFILE_PENDING:
      return { ...state, loading: true };

    case ADMIN_EDIT_PROFILE_FULFILLED:
      return { ...state, loading: false, info: action.payload };

    case ADMIN_SET_QUEST_FORM:
      return { ...state, quest: { ...action.data }, loading: false };

    case ADMIN_EDIT_QUEST_FORM:
      return {
        ...state,
        quest: {
          ...state.quest,
          [action.key]: action.value
        }
      };

    case ADMIN_SET_LOADING:
      return {
        ...state,
        loading: action.value
      };

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
    .then(async (doc) => {
      let y1 = await firestore
        .collection('profile')
        .doc(doc.id)
        .collection('friends')
        .where('profile.info.year', '==', '1')
        .get()
        .then((doc) => {
          return doc.size;
        });
      let y2 = await firestore
        .collection('profile')
        .doc(doc.id)
        .collection('friends')
        .where('profile.info.year', '==', '2')
        .get()
        .then((doc) => {
          return doc.size;
        });
      let y3 = await firestore
        .collection('profile')
        .doc(doc.id)
        .collection('friends')
        .where('profile.info.year', '==', '3')
        .get()
        .then((doc) => {
          return doc.size;
        });
      let y4 = await firestore
        .collection('profile')
        .doc(doc.id)
        .collection('friends')
        .where('profile.info.year', '==', '4')
        .get()
        .then((doc) => {
          return doc.size;
        });

      let friend = { 1: y1, 2: y2, 3: y3, 4: y4 };
      return { ...doc.data(), friend };
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

export const setQuestForm = (data) => ({
  type: ADMIN_SET_QUEST_FORM,
  data
});

export const editQuestForm = (key, value) => ({
  type: ADMIN_EDIT_QUEST_FORM,
  key,
  value
});

export const setLoading = (value) => ({
  type: ADMIN_SET_LOADING,
  value
});
