import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const AuthButton = ({ user, logout }) => {
  return user ? (
    <>
      <span style={{ color: "ffea32" }} className="nav-link shadow">
        {user.username}
      </span>
      <li className="nav-item">
        <span
          style={{ color: "#ffc107" }}
          className="nav-link"
          onClick={logout}
        >
          Logout
        </span>
      </li>
    </>
  ) : (
    <li key="loginButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#ffea32", fontSize: "1.2rem" }}
        to="/login"
        className="nav-link"
      >
        Login
      </Link>
    </li>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
