import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
import { Typography } from "../includes";

const AuthButton = ({ user, logout }) => {
  return user ? (
    <>
      <Typography
        component="h5"
        variant="title"
        color="inherit"
        noWrap
        onClick={logout}
      >
        LogOut
      </Typography>
    </>
  ) : (
    <Typography></Typography>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
