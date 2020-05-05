import React, { Component } from "react";
import { connect } from "react-redux";
import { addDriver } from "../store/actions";
import LocationPicking from "./LocationPicking";
import { Redirect } from "react-router-dom";

class AddDriver extends Component {
  state = {
    driver_name: "",
    lat: "",
    lng: "",
    school: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handlePosition = ({ lat, lng }) => this.setState({ lat: lat, lng: lng });

  handleRadio = (value) => this.setState({ school: value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDriver(this.state, this.state.school, this.props.history);
  };

  render() {
    if (!this.props.user) return <Redirect to="/" />;
    return (
      <div className="text-center">
        <div className="container mt-5">
          <div className="image">
            <div className="card my-5 mt-5">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="ml-3" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.state.driver_name}
                      name="driver_name"
                      placeholder="Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    {this.props.schools.map((school) => (
                      <label className="mx-5" key={school.name}>
                        <input
                          type="radio"
                          value={school.id}
                          name="school"
                          key={school.id}
                          onChange={(event) =>
                            this.handleRadio(event.target.value)
                          }
                        />
                        {school.name}
                      </label>
                    ))}
                  </div>

                  <button type="submit" className="btn btn-info">
                    Add Driver
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="image ml-5">
            <LocationPicking handlePosition={this.handlePosition} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.erkab.schools,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDriver: (newDriver, schoolID, history) =>
      dispatch(addDriver(newDriver, schoolID, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDriver);
