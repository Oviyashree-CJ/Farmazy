import React, { useState } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Safe localStorage access
    let storedUsername = "";
    try {
      storedUsername = localStorage.getItem("loggedInUser") || "";
    } catch (e) {
      console.warn("localStorage access error:", e);
    }

    // Username validation
    if (!/^[a-zA-Z0-9_.-]+$/.test(user)) {
      setMessage("Invalid username format!");
      return;
    }

    // Fixed email regex (safe and simple)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Invalid email address!");
      return;
    }

    if (comment.length < 5) {
      setMessage("Comment should be at least 5 characters long!");
      return;
    }

    setMessage(
      storedUsername === user
        ? `Thank you ${storedUsername}, your response has been submitted.`
        : "No user logged in, but response submitted."
    );

    // Optional: Reset form
    setUser("");
    setEmail("");
    setComment("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h3 className="contact-title">Contact Us</h3>
        <p className="contact-subtitle">Feel free to reach out for any queries or feedback.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Comment your queries or feedback</label>
            <textarea
              className="form-textarea"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          {message && <div className="message">{message}</div>}
        </form>

        <div className="btn-group">
          <a href="/products" className="nav-btn blue">Continue Shopping</a>
          <a href="/home" className="nav-btn green">Back to Home</a>
        </div>

        <div className="contact-info">
          <p>For Further queries, Feel free to contact us</p>
          <p><strong>Email:</strong> support@farmazy.com</p>
          <p><strong>Phone:</strong>  044-22334455</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
