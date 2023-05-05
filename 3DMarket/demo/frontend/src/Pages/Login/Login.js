import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

function Login() {
  return (
    <>
      <Header isRequired />

      <div className="container">
        <div className="login-wrapper">
          <h2 className="login">LOGIN</h2>
          <form method="post">
            <input
              className="user-id"
              type="text"
              name="userId"
              placeholder="ID"
              required
            ></input>
            <input
              type="text"
              name="userPassword"
              placeholder="PASSWORD"
              required
            ></input>
            <input type="submit" value="Login" />
            <Link to="/register">
              <button className="btn-sign">Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
