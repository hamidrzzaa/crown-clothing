import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/fireBaseUtils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmitForm = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmitForm}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            onInputChange={this.handleInputChange}
            required
            value={this.state.email}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            onInputChange={this.handleInputChange}
            required
            value={this.state.password}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

// <input
//             id="email"
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input type="submit" value="Sign In " />
