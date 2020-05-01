import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import { connect } from "react-redux";

const defaultPosition = {
  lat: 31.963158,
  lng: 35.930359,
};

class LocationPicking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Al-Urdon St. 265, Amman, Jordan",
      position: {
        lat: 0,
        lng: 0,
      },
    };
    this.submitAddress = () => {
      console.log(this.state.position);
      this.props.addAddress(this.state.position);
    };
    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
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
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(LocationPicking);
