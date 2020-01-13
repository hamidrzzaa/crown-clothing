import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/fireBaseUtils";
import { ReactComponent as Logo } from "../../assets/4.2 crown.svg.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
const Header = ({ currentUser, cartDropDownHidden }) => {
  const renderSignInOutBtn = () => {
    if (currentUser) {
      return (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      );
    } else {
      return (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      );
    }
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {renderSignInOutBtn()}
        <CartIcon />
      </div>
      {cartDropDownHidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    cartDropDownHidden: state.cart.hidden
  };
};

export default connect(mapStateToProps)(Header);
