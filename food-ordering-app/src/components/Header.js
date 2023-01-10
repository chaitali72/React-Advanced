import React from "react";
import Icon from "../../src/images/food-order-icon.png";

export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Icon} alt="food-logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Cart</li>
            <button type="submit" className="sign-btn">
              Sign In
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
