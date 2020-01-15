import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_CART_ITEM,
  REDUCE_CART_ITEM
} from "../actions/cartTypes";
import addItemToCart from "../utils/addItemToCart";
import reduceCartItemQuantity from "../utils/reduceCartItemQuntity";
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
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: reduceCartItemQuantity(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
