import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import MenuBar from "./MenuBar";
import Signin from "./Signin";
import Cart from "./Cart";
import MenuBar2 from "./MenuBar2";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HZEEeCgxjB76ww9mmnrWEOrAQYYdCaaexqTH4xy6lPt9btasTYQwePIZNR0mvJk2hoOwzWKW5ib6Liy7PBCJAoD00mwjQsj4d"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Only run once when load
    auth.onAuthStateChanged((authUser) => {
      console.log("User:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <MenuBar />
            <Orders />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/payment">
            <MenuBar2 />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <MenuBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
