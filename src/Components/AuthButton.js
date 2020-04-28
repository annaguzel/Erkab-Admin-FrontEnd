import React from "react";
import { Link } from "react-router-dom";

// Fontawesome

const AuthButton = () => {
  let buttons = [
    <li key="loginButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#ffea32", fontSize: "1.2rem" }}
        to="/login"
        className="nav-link"
      >
        Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#ffea32", fontSize: "1.2rem" }}
        to="/signup"
        className="nav-link"
      >
        Signup
      </Link>
    </li>,
  ];

  return <ul className="auth navbar-nav ml-auto">{buttons}</ul>;
};

export default AuthButton;
