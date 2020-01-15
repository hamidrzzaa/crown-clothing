import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import {
  removeCartItem,
  reduceCartItemQuantity,
  addToCart
} from "../../actions/cartActions";
const CheckoutItem = props => {
  const { id, name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => props.reduceCartItemQuantity(id)}>
          &#10096;
        </div>
        {quantity}
        <div className="arrow" onClick={() => props.addToCart(props.cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          props.removeCartItem(id);
        }}
      >
        &#10007;
      </div>
    </div>
  );
};

export default connect(null, {
  removeCartItem,
  reduceCartItemQuantity,
  addToCart
})(CheckoutItem);
