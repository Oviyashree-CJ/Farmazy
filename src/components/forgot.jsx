// src/pages/ForgotPinPage.js
import React, { useState } from "react";
import "../assets/css/Forgot.css";

const ForgotPin = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    newPassword: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    const storedEmail = localStorage.getItem(`${form.username}_email`);
    const storedPassword = localStorage.getItem(`${form.username}_password`);
  
    if (storedEmail && storedEmail === form.email) {
      if (form.newPassword === storedPassword) {
        setStatus("❌ New password can't be the same as the old one.");
      } else {
        localStorage.setItem(`${form.username}_password`, form.newPassword);
        setStatus("✅ Password successfully reset!");
      }
    } else {
      setStatus("❌ Invalid username or email.");
    }
  };
  

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h4 className="text-center mb-4 text-success">Forgot PIN</h4>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Registered Email"
              value={form.email}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              value={form.newPassword}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <button className="btn btn-success w-100" onClick={handleReset}
              disabled={!form.username || !form.email || !form.newPassword}>
                Reset Password
            </button>

            {status && <div className="text-center mt-3 fw-bold">{status}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPin;
