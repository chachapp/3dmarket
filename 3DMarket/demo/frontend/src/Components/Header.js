import React from "react";
import { Link } from "react-router-dom";
import "../SCSS/header.scss";

function Header() {
    return (
        <div className="head">
            <h1>3D MARKET</h1> 
            <button>CART</button>
            <Link to="/login">
                <button>LOGIN</button>
            </Link>
        </div>
    )
}

export default Header;