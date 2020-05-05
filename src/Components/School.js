import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBusses, fetchChildren, fetchRoute } from "../store/actions";
import BusList from "./BusList";
import ChildList from "./ChildList";
import { Redirect } from "react-router-dom";
import Map from "./Maps";

const googleMapsApiKey = "AIzaSyAA4NGNqboLQzgPWCVw2DzZB3QuBnoFtvY";

class Bus extends Component {
  componentDidMount() {
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

  render() {
    const places = [
      { latitude: 31.975973035435832, longitude: 35.90701305273439 },
      { latitude: 31.92003975585111, longitude: 35.89877330664064 },
      { latitude: 31.96082780136791, longitude: 35.97842418554689 },
    ];

    const {
      loadingElement,
      containerElement,
      mapElement,
      defaultCenter,
      defaultZoom,
    } = this.props;

    const busLists = this.props.busses.map((bus) => (
      <BusList key={bus.driver_name + bus.id} bus={bus} />
    ));
    const childLists = this.props.children.map((child) => (
      <ChildList key={child.name + child.id} child={child} />
    ));
    if (!this.props.user) return <Redirect to="/" />;
    return (
      <div className="text-center">
        <div className="container mt-5">
          <div className="image">
            <h3 style={{ color: "black" }}>Busses</h3>
            <hr />
            <div className="row mx-4">{busLists}</div>
          </div>

          <div className="image ml-5">
            <h3 style={{ color: "black" }}>Children</h3>
            <hr />
            <div className="row mx-4">{childLists}</div>
          </div>
        </div>
        <h2>Routes:</h2>
        {this.props.route.map((route) => (
          <div>
            <h3>Driver Name : {route.bus}</h3>
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
    user: state.user,
    route: state.erkab.route,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusses: (schoolID) => dispatch(fetchBusses(schoolID)),
    fetchChildren: (schoolID) => dispatch(fetchChildren(schoolID)),
    fetchRoute: (schoolID) => dispatch(fetchRoute(schoolID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
