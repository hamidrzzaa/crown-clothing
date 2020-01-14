import React, { memo } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { toggleCartMenu } from "../../actions/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg.svg";
import "./CartIcon.styles.scss";

const CartIcon = memo(({ toggleCartMenu, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartMenu}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
});

const mapStateToProps = state => {
  console.log();
  return {
    itemCount: state.cart.cartItems.reduce(
      (sum, cartItem) => sum + cartItem.quantity,
      0
    )
  };
};
compose();
export default connect(mapStateToProps, { toggleCartMenu })(CartIcon);
