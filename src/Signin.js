import React, { useState } from "react";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin_logo"
          src="http://logok.org/wp-content/uploads/2014/05/Walmart-Logo-880x645.png"
          alt="Walmart-Logo"
        />
      </Link>
      <div className="signin_container">
        <h1>Sign in to your Walmart account</h1>
        <form>
          <input
            type="email"
            placeholder="Email address (required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password (required)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="signin_checkbox">
            <input type="checkbox" /> Keep me signed in
          </small>
          <button onClick={signIn} className="signin_button">
            Sign in
          </button>
        </form>
        <p>Don't have an account?</p>
        <button onClick={register} className="register_button">
          Create account
        </button>
      </div>
    </div>
  );
}

export default Signin;
