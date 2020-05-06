/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  DirectionsRenderer,
} from "react-google-maps";

class MapDirectionsRenderer extends React.Component {
  state = {
    directions: null,
    error: null,
    distance: null,
  };

  componentDidMount() {
    const { locations, travelMode } = this.props;

    const waypoints = locations.map((p) => ({
      location: { lat: p.latitude, lng: p.longitude },
      stopover: true,
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const distance = (result) => {
      let total = 0;
      let myroute = result.routes[0];
      for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
      }
      total = total / 1000;
      this.setState({
        distance: total,
      });
    };

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          distance(result);
          console.log(this.state.distance);
        } else {
          this.setState({ error: result });
        }
      }
    );
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    return (
      this.state.directions && (
        <DirectionsRenderer
          directions={this.state.directions}
          distance={this.state.distance}
        />
      )
    );
  }
}

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
    >
      <MapDirectionsRenderer
        locations={props.markers}
        travelMode={google.maps.TravelMode.DRIVING}
      />
    </GoogleMap>
  ))
);

export default Map;
