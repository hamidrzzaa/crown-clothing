import React from "react";
import "./Checkout.styles.scss";

const CheckoutItem = props => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10007;</div>
    </div>
  );
};

export default CheckoutItem;
