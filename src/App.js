import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/fireBaseUtils";
import "./App.style.css";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SingInAndSignUp from "./Pages/SignIn-SignUp/SignIn-SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.unsubscribe = null;
  }
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    console.log(this.state.currentUser);
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
