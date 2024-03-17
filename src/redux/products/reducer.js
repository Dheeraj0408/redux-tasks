const initialState = {
  products: [],
};

export function productReducer(state=initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, products: action.payload };
    case "ADD_NEW_PRODUCT":
        return {...state,products:[...state.products,{"title":"IPhone 16"}]}
    default:
        return state;
  }
}
