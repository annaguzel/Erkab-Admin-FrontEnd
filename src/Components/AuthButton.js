import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const AuthButton = ({ user, logout }) => {
  // You can use the following syntax:
  // const buttons = user ? <>...</> : <li>...</li>
  // or not define it in a constant, just return it directly
  // Same comment applies to your other repo's AuthButton.
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
  ];
  if (user) {
    buttons = (
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
    );
  }
  return <ul className="auth navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
