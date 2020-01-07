import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.style.css";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SingInAndSignUp from "./Pages/SignIn-SignUp/SignIn-SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
