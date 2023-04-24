import React from "react";
import "../../SCSS/Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
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
          <label form="remember-check">
            <input type="checkbox" id="remember-check" />
            아이디 저장하기
          </label>
          <input
            type="text"
            name="userName"
            placeholder="NAME"
            required
          ></input>
          <input
            type="text"
            name="userNickname"
            placeholder="NICKNAME"
            required
          ></input>
          <input
            type="text"
            name="userPassword"
            placeholder="PASSWORD"
            required
          ></input>
          <input
            type="text"
            name="userEmail"
            placeholder="EMAIL"
            required
          ></input>
          <input type="text" name="userPhone" placeholder="PHONE"></input>
          <input type="submit" value="Login" />
          <Link to="/register">
            <button className="btn-sign">Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
