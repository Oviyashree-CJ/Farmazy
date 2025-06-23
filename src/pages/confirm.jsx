import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/confirm.css";

const LogoutConfirmationModal = ({ username: passedUsername, onClose, onLogout }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fallback to localStorage if username isn't passed
  const username = passedUsername || localStorage.getItem("loggedInUser");

  // Function to clear the cart from localStorage when user logs out
  const clearCart = () => {
    localStorage.removeItem("cart"); // Clears the cart from localStorage
    console.log("Cart cleared.");
  };

  const handleConfirmLogout = () => {
    const storedPassword = localStorage.getItem(`${username}_password`);

    console.log("🔍 Checking password for user:", username);
    console.log("🔐 Stored password:", storedPassword, "🔓 Entered password:", password);

    if (storedPassword === password) {
      clearCart();

      // Call onLogout function passed from parent
      if (typeof onLogout === "function") {
        onLogout(); // Parent will handle setting username to null
        console.log("Successfully logged out.");
        onClose(); // Close the modal
        navigate("/home"); // Redirect to home page
      } else {
        console.error("onLogout is not a function.");
      }
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    console.log("Confirmation for logout is loaded for:", username);
  }, [username]);

  // Handle Forgot PIN link click: close modal and navigate
  const handleForgotPin = () => {
    if (typeof onClose === "function") {
      onClose(); // Close the modal
    }
    navigate("/forgot"); // Navigate to forgot pin page
  };

  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal-box">
        <h3 className="text-success">Confirm Logout</h3>
        <p>Enter your password to logout:</p>

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}

        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleConfirmLogout}>
            Confirm Logout
          </button>
        </div>

        <p
          className="mt-3 text-primary text-decoration-underline"
          style={{ cursor: "pointer" }}
          onClick={handleForgotPin}
        >
          Forgot PIN?
        </p>
      </div>
    </div>
  );
};

// Default props to avoid errors if the props are not passed correctly
LogoutConfirmationModal.defaultProps = {
  onClose: () => {},
  onLogout: () => {},
};

export default LogoutConfirmationModal;
