const initialState = {
  create: false,
  admin: false,
  info: {}
};

const action = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default action;

// export const setLogin = (data) => ({
//   type: LOGIN,
//   data
// });

// export const setLogout = () => ({
//   type: LOGOUT
// });
