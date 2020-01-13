import { TOGGLE_CART, ADD_ITEM } from "../actions/cartTypes";
import addItemToCart from "../utils/addItemToCart";
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
