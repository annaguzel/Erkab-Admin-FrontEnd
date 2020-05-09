import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBusses,
  fetchChildren,
  fetchRoute,
  addRoute,
  fetchSchools,
} from "../../store/actions";

import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import { Redirect } from "react-router-dom";
import Map from "./Maps";
// import { GoogleMap, Marker } from "react-google-maps";

const googleMapsApiKey = "AIzaSyB1bZjRb_ke0TJH76V-UYzX4tyEZ5d9J4Y";

class School extends Component {
  state = {
    bus: "",
    kids: [],
    school: parseInt(this.props.match.params.schoolID),
  };

  componentDidMount() {
    this.props.fetchSchools();
    const schoolID = this.props.match.params.schoolID;

    this.props.fetchBusses(schoolID);
    this.props.fetchChildren(schoolID);
    this.props.fetchRoute(schoolID);
  }

  componentDidUpdate(prevProps) {
    const schoolID = this.props.match.params.schoolID;

    if (schoolID !== prevProps.match.params.schoolID) {
      this.props.fetchBusses(schoolID);
      this.props.fetchChildren(schoolID);
      this.props.fetchRoute(schoolID);
    }
  }

  handleSubmit = () => {
    this.props.addRoute(this.state);
  };

  render() {
    const {
      loadingElement,
      containerElement,
      mapElement,
      defaultCenter,
      defaultZoom,
    } = this.props;
    console.log(this.state);
    const busLists = this.props.busses.map((bus) => {
      return (
        <tr key={bus.id}>
          <td>{bus.id}</td>
          <td>{bus.driver_name}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.setState({ bus: bus.id });
              }}
            >
              Add Driver
            </button>
          </td>
        </tr>
      );
    });

    const childList = this.props.children.map((child) => {
      return (
        <tr key={child.id}>
          <td>{child.id}</td>
          <td>{child.name}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.setState({ kids: [child.id, ...this.state.kids] });
              }}
            >
              Add Child
            </button>
          </td>
        </tr>
      );
    });

    const MapWithAMarker = (withScriptjs, withGoogleMap)((props) => {
      return (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={
            defaultCenter || {
              lat: 32.004364,
              lng: 35.910275,
            }
          }
        >
          {props.markers.map((marker) => {
            return (
              <Marker
                key={marker.name}
                position={{ lat: marker.lat, lng: marker.lng }}
                label={marker.name || marker.driver_name}
              ></Marker>
            );
          })}
        </GoogleMap>
      );
    });
    const points = this.props.children.concat(
      this.props.busses,
      this.props.schools.find((a) => a.id == this.props.match.params.schoolID)
    );

    if (!this.props.user) return <Redirect to="/" />;
    return (
      <div className="text-center">
        <MapWithAMarker
          markers={points}
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=" +
            googleMapsApiKey +
            "&libraries=geometry,drawing,places"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {console.log(this.props.schools)}
        <div className="container mt-5">
          <div className="image">
            <h3 style={{ color: "black" }}>Busses</h3>
            <table className="mt-3 table ">
              <thead>
                <tr>
                  <th>Driver ID</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{busLists}</tbody>
            </table>
          </div>

          <div className="image ml-5">
            <h3 style={{ color: "black" }}>Children</h3>

            <table className="mt-3 table ">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{childList}</tbody>
            </table>
          </div>
        </div>
        <hr />

        <h3>Create a Route</h3>
        <div className="container mt-5 text-center">
          <div className="image">
            <table>
              <thead>
                <tr>
                  <th>Student ID</th>
                </tr>
              </thead>

              <tbody>
                {" "}
                {this.state.kids.map((kid) => {
                  return (
                    <tr key={kid}>
                      <td>{kid}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="image ml-5">
            <table>
              <thead>
                <tr>
                  <th>Driver ID</th>
                </tr>
              </thead>
              <tbody>{this.state.bus}</tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-info">Add Route</button>
        <hr />

        <h2 className="display-3">Routes:</h2>
        {this.props.route.map((route) => (
          <div>
            <h3 className="display-5">Driver Name: {route.bus}</h3>
            <Map
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?key=" +
                googleMapsApiKey +
                "&libraries=geometry,drawing,places"
              }
              markers={route.path}
              loadingElement={
                loadingElement || <div style={{ height: `100%` }} />
              }
              containerElement={
                containerElement || <div style={{ height: "80vh" }} />
              }
              mapElement={mapElement || <div style={{ height: `100%` }} />}
              defaultCenter={
                defaultCenter || {
                  lat: 31.958497543606498,
                  lng: 35.90563976171877,
                }
              }
              defaultZoom={defaultZoom || 11}
            />
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    busses: state.erkab.busses,
    children: state.erkab.children,
    route: state.erkab.route,
    user: state.user,
    schools: state.erkab.schools,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoute: (schoolID) => dispatch(fetchRoute(schoolID)),
    fetchBusses: (schoolID) => dispatch(fetchBusses(schoolID)),
    fetchChildren: (schoolID) => dispatch(fetchChildren(schoolID)),
    fetchSchools: () => dispatch(fetchSchools()),
    addRoute: (route) => dispatch(addRoute(route)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(School);
