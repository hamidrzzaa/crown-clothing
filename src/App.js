import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.style.css";
import HomePage from "./Pages/HomePage/HomePage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
