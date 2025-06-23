import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import home from "../assets/images/home.png";
import AuthButton from "./auth.jsx";

const ProductNavbar = ({ onSectionChange }) => {
  const handleSectionChange = (section) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <nav className="navbar">
  <div className="navbar-container">
    {/* Logo and Brand */}
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="Farmazy Logo" className="logo-img" />
    </Link>

    {/* Navigation Categories */}
    <div className="nav">
      <button className="nav-sec" onClick={() => handleSectionChange("all")}>All</button>
      <button className="nav-sec" onClick={() => handleSectionChange("vegetables")}>Vegetables</button>
      <button className="nav-sec" onClick={() => handleSectionChange("fruits")}>Fruits</button>
      <button className="nav-sec" onClick={() => handleSectionChange("beverages")}>Beverages</button>
      <button className="nav-sec" onClick={() => handleSectionChange("snacks")}>Snacks</button>
      <button className="nav-sec" onClick={() => handleSectionChange("frozen")}>Frozen Items</button>
      <button className="nav-sec" onClick={() => handleSectionChange("spices")}>Spices</button>
      <button className="nav-sec" onClick={() => handleSectionChange("bake")}>Baked Items</button>
      <button className="nav-sec" onClick={() => handleSectionChange("pcare")}>Personal Care</button>
      <button className="nav-sec" onClick={() => handleSectionChange("hcare")}>Household</button>

    {/* Icons Section */}
      <div className="nav-icons">
      <Link to="/" className="nav-sec">
        <img src={home} alt="Home" className="nav-icon image-fluid" />
      </Link>
      <Link to="/cart" className="nav-sec">
        <img src={cart} alt="Cart" className="nav-icon" />
      </Link>
      <AuthButton />
      </div>
    </div>
  </div>
</nav>

  );
};

export default ProductNavbar;
