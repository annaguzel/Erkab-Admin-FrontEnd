import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import { connect } from "react-redux";
import { postSchool } from "../store/actions";
// Fontawesome

/* Default position */
const defaultPosition = {
  lat: 31.963158,
  lng: 35.930359,
};

/**
 * same notes from the other repo review apply here
 */

class LocationPicking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Al-Urdon St. 265, Amman, Jordan",
      name: "",
      image: "",
      position: {
        lat: 0,
        lng: 0,
      },
    };
    this.submitSchool = (event) => {
      event.preventDefault();
      this.props.postSchool(
        this.state,
        this.state.position,
        this.props.closeModal
      );
    };
    this.onTextchange = (event) =>
      this.setState({ [event.target.name]: event.target.value });

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address, places }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
      <div>
        <div className="mt-5 p-2">
          <form onSubmit={this.submitSchool}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="first_name"
                onChange={this.onTextchange}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Image</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="imageUrl"
                onChange={this.onTextchange}
              />
            </div>
            <div>
              <h1>{this.state.address}</h1>
              <div className="text-center">
                <LocationPicker
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "400px" }} />}
                  defaultPosition={defaultPosition}
                  onChange={this.handleLocationChange}
                />
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postSchool: (newSchool, position, closeModal) =>
      dispatch(postSchool(newSchool, position, closeModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicking);
