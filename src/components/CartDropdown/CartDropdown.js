import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import CartItems from "../Cart/CartItem";

import "./CartDropdown.scss";

const CartDropdown = props => {
  const { cartItems } = props;
  const renderCartItems = () => {
    if (cartItems.length > 0) {
      return cartItems.map(item => <CartItems key={item.id} item={item} />);
    }
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
export default connect(mapStateToProps)(CartDropdown);
