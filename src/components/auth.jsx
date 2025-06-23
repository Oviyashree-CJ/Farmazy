// AuthButton.js
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import login from "../assets/images/login.png"
import LogoutConfirmationModal from "../pages/confirm"; // Import modal
import "../assets/css/Authbutton.css";

const AuthButton = () => {
  const [username, setUsername] = useState(localStorage.getItem("loggedInUser"));
  const [showModal, setShowModal] = useState(false);

  const handleSuccessfulLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUsername(null);
    alert("Logged out successfully");
    <Navigate to="/home"/>
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("loggedInUser");
    setUsername(storedUsername);
    console.log("Stored username:", storedUsername); // Log to confirm it's being set
  }, []);

  const handleCloseModal = () =>{
    setShowModal(false);
  } 

  return (
    <>
      <li id="authButton" className="nav-item">
        
        {username ? (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              <img src={login} alt="Login" className="nav-icon image-fluid" />
              {username}
            </button>
            <ul className="dropdown-menu custom-dropdown">
              <li>
                <button className="dropdown-item" onClick={() => setShowModal(true)}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            <img src={login} alt="Login" className="nav-icon image-fluid" />
            Login
          </Link>
        )}
      </li>

      {showModal && (
        <LogoutConfirmationModal
          username={username}  
          onClose={handleCloseModal}
          onLogout={handleSuccessfulLogout}
        />
      )}
    </>
  );
};

export default AuthButton;
