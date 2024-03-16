//Intial state of redux
const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 10 };
    case "DECREMENT":
      return { ...state, count: state.count - 5 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
