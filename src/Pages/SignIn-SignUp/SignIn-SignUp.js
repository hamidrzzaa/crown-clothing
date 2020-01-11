import React from "react";
import "./SignIn-SignUp.style.scss";
import SignIn from "../../components/Sign-In/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SingInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSignUp;
