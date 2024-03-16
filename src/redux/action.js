//action creator: is a function which returns the action

export const incrementAction = () => {
  const action = {
    type: "INCREMENT",
  };
  return action;
};
export const decrementAction = () => {
  const action = {
    type: "DECREMENT",
  };
  return action;
};

export const resetAction = () => {
  const action = {
    type: "RESET",
  };
  return action;
};
