import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.style.css";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
