const initialState = {
  name: "Dheeraj",
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: "Hello" };
    default:
      return state;
  }
}
