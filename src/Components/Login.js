import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";

import "../App.css";
import bus from "../images/bus.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user) return <Redirect to="/" />;
    return (
      <div className="text-center">
        <div className="container mt-5">
          <div className="image">
            <div className="card my-5">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    Login to continue
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="box ml-5">
            <img className="image" src={bus} alt="school" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
