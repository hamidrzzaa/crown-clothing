import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = props => {
  const { price } = props;
  const onToken = token => {
    console.log(token);
    alert("Payment was successful");
  };
  const priceInCents = price * 100;
  const pubKey = "pk_test_THgrM1qLZoJTcG0LWATMBSG2003AdzXJZY";
  return (
    <StripeCheckout
      name="Crown Clothing"
      k
      label="Pay Now"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`your total is : $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeCheckoutButton;
