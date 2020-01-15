import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_CART_ITEM,
  REDUCE_CART_ITEM
} from "./cartTypes";

export const toggleCartMenu = () => {
  return {
    type: TOGGLE_CART
  };
};

export const addToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeCartItem = id => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id
  };
};

export const reduceCartItemQuantity = id => {
  return {
    type: REDUCE_CART_ITEM,
    payload: id
  };
};
