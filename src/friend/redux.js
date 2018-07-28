const CHANGE_YEAR = 'CHANGE_YEAR';

const initialState = {
  selectYear: 1
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_YEAR:
      return { ...state, selectYear: action.value };

    default:
      return state;
  }
};

export default action;

// export const setForm = (key, value) => ({
//   type: SET_FORM,
//   key,
//   value
// });

export const changeYear = (value) => ({
  type: CHANGE_YEAR,
  value
});
