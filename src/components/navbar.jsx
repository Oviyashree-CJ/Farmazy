import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/logo.png";
import about from "../assets/images/about.png";
import home from "../assets/images/home.png";
import prod from "../assets/images/products.png";
import cont from "../assets/images/contact.png";
import cart from "../assets/images/cart.png";
import AuthButton from "../components/auth";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/about" className="navbar-logo">
          <img src={logo} alt="Farmazy Logo" className="logo-img" />
          
        </Link>

        <div className="nav">
          {/* Navigation Links */}
          <Link to="/" className="nav-link">
            <img src={home} alt="Home" className="nav-icon image-fluid" />
            Home
          </Link>

          <Link to="/products" className="nav-link">
            <img src={prod} alt="Products" className="nav-icon image-fluid" />
            Products
          </Link>

          <Link to="/about" className="nav-link">
            <img src={about} alt="About" className="nav-icon image-fluid" />
            About Us
          </Link>

          <Link to="/contact" className="nav-link">
            <img src={cont} alt="Contact" className="nav-icon" />
            Contact
          </Link>
        

        {/* Cart Link */}
        <Link to="/cart" className="pro-nav-icon nav-link">
          <img src={cart} alt="Cart" className="nav-icon" />
          <span>Cart</span>
        </Link>

        <AuthButton/>
        </div>
      </div>
    </nav>
  );
}
