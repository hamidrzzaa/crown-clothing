import { TOGGLE_CART, ADD_ITEM } from "./cartTypes";

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
