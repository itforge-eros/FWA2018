const COLLAPSE = 'COLLAPSE';

const initialState = {
  collapsed: true
};

const actions = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      return state;
  }
};

export default actions;

export const setCollapse = () => ({
  type: COLLAPSE
});
