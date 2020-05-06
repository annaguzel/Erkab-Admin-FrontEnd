import React, { Component } from "react";
import { connect } from "react-redux";
import { addDriver } from "../../store/actions";
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

  handleList = (value) => this.setState({ school: value });

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
                <div class="card-header">
                  <h3 className="display-4"> Add Driver</h3>
                </div>
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
                    <select
                      name="school"
                      className="custom-search-select"
                      onChange={(event) => this.handleList(event.target.value)}
                    >
                      <option>Select School</option>
                      {this.props.schools.map((school) => (
                        <option key={school.id} value={school.id}>
                          {school.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-info">
                    ADD DRIVER
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
