import React, { useEffect } from "react";
import "./CSS/App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
/*npm i install react-router-dom*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SideMenu from "./Components/SideMenu";

const promise = loadStripe(
  "pk_test_51HWK0jBcF3wNQlhY4El73VuJgXx6e3wpa1pp2Chhr1aicMJNjLsdEeg6619EGSei9QPJIfvtHQCsC4QG3I4t4GmO00q7jZjSd3"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run ONCE when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention styling - lowercases
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <SideMenu />
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <SideMenu />
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <SideMenu />
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <SideMenu />
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
