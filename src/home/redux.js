const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_LOADING = 'SET_LOADING';

const initialState = {
  loading: false,
  login: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,
        login: true,
        loading: true
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        login: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  }
};

export const setLogin = (data) => ({
  type: LOGIN,
  data
});

export const setLogout = () => ({
  type: LOGOUT
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});
