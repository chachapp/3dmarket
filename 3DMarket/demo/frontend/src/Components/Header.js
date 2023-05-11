import React from "react";
import { Link } from "react-router-dom";
import "../SCSS/header.scss";

function Header({ isRequired }) {
  return (
    <div className="header-container">
      <div className="header-title">
        <Link to="/">
          <h1>3D MARKET</h1>
        </Link>
      </div>

      {/* 차후 모달 컨테이너 작업하기 */}
      {!isRequired && (
        <div className="header-items">
          <button>CART</button>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
          <Link to="/register">
            <button>SIGN UP</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
