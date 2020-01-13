import React from "react";
import { connect } from "react-redux";
import { toggleCartMenu } from "../../actions/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg.svg";
import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartMenu }) => {
  return (
    <div className="cart-icon" onClick={toggleCartMenu}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartMenu })(CartIcon);
