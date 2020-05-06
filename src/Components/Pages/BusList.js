import React, { Component } from "react";

class BusList extends Component {
  render() {
    const bus = this.props.bus;
    return (
      <tr>
        <td>{bus.driver_name}</td>
      </tr>
    );
  }
}

export default BusList;
