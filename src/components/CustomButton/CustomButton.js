import React from "react";
import "../CustomButton/CustomButton.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-signIn" : ""} ${
        inverted ? "inverted" : ""
      } `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
