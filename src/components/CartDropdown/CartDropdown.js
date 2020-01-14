import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import CartItems from "../Cart/CartItem";
import { toggleCartMenu } from "../../actions/cartActions";
import "./CartDropdown.scss";

const CartDropdown = props => {
  const { cartItems } = props;
  const renderCartItems = () => {
    if (cartItems.length > 0) {
      return cartItems.map(item => <CartItems key={item.id} item={item} />);
    } else {
      return <p className="empty-message">You don't have any Item yet!</p>;
    }
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          props.toggleCartMenu(); //for closing the cart drop down
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { toggleCartMenu })
)(CartDropdown);
