const SET_FORM = 'SET_FORM';
const SET_FORM_DEFAULT = 'SET_FORM_DEFAULT';

const initialState = {
  create: true,
  admin: false,
  approve: false,
  info: {
    nickname: 'Hello',
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

// export const setLogout = () => ({
//   type: LOGOUT
// });
