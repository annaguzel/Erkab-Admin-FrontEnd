import React, { Component } from "react";

import Map from "./Maps";

const googleMapsApiKey = "AIzaSyAA4NGNqboLQzgPWCVw2DzZB3QuBnoFtvY";

const Routes = (props) => {
  const places = [
    { latitude: 31.92003975585111, longitude: 35.89877330664064 },
    { latitude: 31.975973035435832, longitude: 35.90701305273439 },
    { latitude: 31.975973035435832, longitude: 35.91701305273439 },
    { latitude: 31.96082780136791, longitude: 35.97842418554689 },
  ];
  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom,
  } = props;

  return (
    <Map
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?key=" +
        googleMapsApiKey +
        "&libraries=geometry,drawing,places"
      }
      markers={places}
      loadingElement={loadingElement || <div style={{ height: `100%` }} />}
      containerElement={containerElement || <div style={{ height: "80vh" }} />}
      mapElement={mapElement || <div style={{ height: `100%` }} />}
      defaultCenter={
        defaultCenter || { lat: 31.958497543606498, lng: 35.90563976171877 }
      }
      defaultZoom={defaultZoom || 11}
    />
  );
};

export default Routes;
