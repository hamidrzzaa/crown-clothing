import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./actions/userActions";
import { auth, createUserProfile } from "./firebase/fireBaseUtils";
import "./App.style.css";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
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
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const realUser = await createUserProfile(userAuth);
        realUser.onSnapshot(snapshot => {
          const user = snapshot.data();
          const id = snapshot.id;
          this.props.setUser({ id, ...user });
          // this.setState({ currentUser: { id, ...user } });
        });
      } else {
        // this.setState({ currentUser: null });
        this.props.setUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={props =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSignUp {...props} />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps, { setUser })(App);
