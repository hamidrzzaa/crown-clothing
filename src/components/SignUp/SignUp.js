import React from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignUp.styles.scss";
import { auth, createUserProfile } from "../../firebase/fireBaseUtils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  //handle submit
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return alert("passwords do'nt match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      //reset the state
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account </h2>
        <span className="wolf">Sign up with yur email and password </span>
        <form className="sign-up" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            onInputChange={this.onInputChange}
            value={this.state.displayName}
            type="text"
            required
            label="display Name"
          />
          <FormInput
            name="email"
            onInputChange={this.onInputChange}
            value={this.state.email}
            type="email"
            required
            label="email"
          />
          <FormInput
            name="password"
            onInputChange={this.onInputChange}
            value={this.state.password}
            type="password"
            required
            label="password"
          />
          <FormInput
            name="confirmPassword"
            onInputChange={this.onInputChange}
            value={this.state.confirmPassword}
            type="password"
            required
            label="confirm password"
          />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
