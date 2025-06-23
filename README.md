# Farmazy - Grocery Web Application

Farmazy is a responsive grocery shopping web application developed using React.js. The platform is designed to offer a smooth online shopping experience for grocery items, with user-friendly authentication, dynamic product listings, and a clean interface.

This project is ideal for learning React components, state management, form validations, and frontend interaction patterns commonly used in real-world applications.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Authentication Flow](#authentication-flow)

---

## Features

The Farmazy application includes the following key features:

### Product Display

- Product sections categorized by type (e.g., fruits, groceries).
- Carousel-based navigation between product categories.
- Each section displays up to four products per row.
- Items are organized with name, image, and price.

### User Authentication

- Login with username, email, and password validation.
  - Username accepts full and special characters.
  - Email is validated with standard format checking.
  - Password must include at least six characters, with at least one number and one alphabet.
- After successful login:
  - The "Login" button changes to display the username.
  - A dropdown menu appears with a logout option.
- Logout requires password re-entry for confirmation.
  - If the password is incorrect, an error message is displayed.
  - If logout is confirmed, the user is logged out.
- Includes a "Forgot PIN?" option:
  - Leads to a password reset form.
  - Requires username, email, and new password for confirmation.

---

## Technologies Used

- **Frontend:**
  - React.js
  - CSS3
  - Bootstrap (for responsive layout and UI components)
  - JavaScript (ES6+)

- **Tools & Configuration:**
  - npm (Node Package Manager)
  - Git for version control
  - VS Code (Recommended IDE)

---

## Authentication Flow (Explained)

1. **Login:**
- Validates username, email, and password format.
- If valid, stores user data in local storage or state.
- Displays user name on the navbar with a dropdown.

2. **Logout:**
- On clicking "Logout", a modal appears asking for password.
- If password is correct, user is logged out and login button reappears.
- If incorrect, an error is shown.

3. **Forgot PIN:**
- Redirects to a reset form.
- User must enter their username, email, and new password.
- On validation, credentials are updated.

---

Developed by **Oviyashree C J** with the help of ChatGPT for guidance and code generation

---
