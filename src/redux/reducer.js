//Intial state of redux
const initialState = {
  count: 0,
  totalTickets: 100,
  holdTickets: 0,
  bookedTickets: 0,
  availableTickets: 100,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 10 };
    case "DECREMENT":
      return { ...state, count: state.count - 5 };
    case "RESET":
      return { ...state, count: 0 };
    case "BOOK_TICKETS":
      return { ...state, availableTickets: state.availableTickets - 1 };
    case "HOLD_TICKET":
      return { ...state, holdTickets: state.holdTickets + 1 };
    default:
      return state;
  }
};
