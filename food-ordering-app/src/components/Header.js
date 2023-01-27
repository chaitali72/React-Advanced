import React, { useState } from "react";
import FOOD_LOGO from "../assets/food_logo.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utills/useOnline";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            {" "}
            <img src={FOOD_LOGO} alt="food-logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
            <li> {isOnline ? " ✅ " : " 🛑 "}</li>
            {!isLogedIn ? (
              <button
                type="submit"
                className="sign-btn"
                onClick={() => {
                  setIsLogedIn(true);
                }}
              >
                Sign In
              </button>
            ) : (
              <button
                type="submit"
                className="sign-btn"
                onClick={() => {
                  setIsLogedIn(false);
                }}
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
