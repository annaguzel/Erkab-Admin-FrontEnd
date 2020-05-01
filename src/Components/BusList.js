import React, { Component } from "react";

class BusList extends Component {
  render() {
    const bus = this.props.bus;
    return (
      <ul class="list-group">
        <li class="list-group-item block">Driver Name: {bus.driver_name}</li>
      </ul>
    );
  }
}

export default BusList;
