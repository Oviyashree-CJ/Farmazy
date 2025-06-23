import React, { useState } from "react";
import "../assets/css/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    agree: false,
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z0-9@_.-]+$/.test(formData.username)) {
      newErrors.username = "Invalid username! Only letters, numbers, and @_.- are allowed.";
    }

    if (!/^[a-zA-Z]+[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(formData.email)) {
      newErrors.email = "Invalid email address!";
    }

    if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must have 10 digits starting between 6 and 9.";
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/.test(formData.password)) {
      newErrors.password = "Password must be at least 6 characters, with at least one letter and one number.";
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the Terms & Conditions.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      // Storing the 'loggedInUser' in localStorage
      localStorage.setItem("loggedInUser", formData.username);
      localStorage.setItem(`${formData.username}_password`, formData.password); 
      localStorage.setItem(`${formData.username}_email`, formData.email);
      localStorage.setItem(`${formData.username}_phone`, formData.phone);
  
      window.location.href = "/home"; // Redirect to homepage
    }
  };
  

  return (
    <div className="login-box">
      <h3 className="text-center">Login to Farmazy</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter username"
          />
          {errors.username && <div className="text-danger mt-2">{errors.username}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
          {errors.phone && <div className="text-danger mt-2">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
          />
          {errors.email && <div className="text-danger mt-2">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
          {errors.password && <div className="text-danger mt-2">{errors.password}</div>}
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </label>
          {errors.agree && <div className="text-danger mt-2">{errors.agree}</div>}
        </div>

        <button type="submit" className="btn btn-success btn-block w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
