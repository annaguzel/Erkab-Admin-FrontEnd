import React, { Component } from "react";

class BusList extends Component {
  render() {
    const bus = this.props.bus;

    return (
      <div className="text-center">
        <ul class="list-group">
          <li class="list-group-item block">Driver Name: {bus.driver_name}</li>
        </ul>
      </div>
    );
  }
}

export default BusList;
