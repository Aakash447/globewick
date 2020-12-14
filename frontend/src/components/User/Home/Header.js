import React from "react";
import "./css/header.scss";
import { Link } from "react-router-dom";
import './css/mobile.scss'

function Header() {
  return (
    <>
      <div id="header_wrapper">
        <div className="container">
          <div className="row">
            <div id="logo">
            <Link to="/">  <img src="images/globewick_logo.png" alt="logo" /></Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/login" >Login</Link>
                </li>
                
              </ul>
            </nav>
          </div>
          {/* navigation ends here */}
        </div>

      </div>
    </>
  );
}
export default Header;
