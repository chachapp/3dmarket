import React from "react";
import "../../SCSS/Login.scss";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

function Register() {
  return (
    <>
      <Header isRequired />

      <div className="container">
        <div className="register-wrapper">
          <h2 className="register">Sign Up</h2>
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
