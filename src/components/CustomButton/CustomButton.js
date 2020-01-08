import React from "react";
import "../CustomButton/CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-signIn" : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
