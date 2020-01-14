import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
const CheckoutPage = props => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="block-header">
          <span>Product</span>
        </div>
        <div className="block-header">
          <span>Description</span>
        </div>
        <div className="block-header">
          <span>Quantity</span>
        </div>
        <div className="block-header">
          <span>Price</span>
        </div>
        <div className="block-header">
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>Total : ${props.totalPrice}</span>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  };
};
export default connect(mapStateToProps)(CheckoutPage);
