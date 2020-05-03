import React, { Component } from "react";

class BusList extends Component {
  render() {
    const bus = this.props.bus;

    return (
      <div className=" mx-auto mt-2 text-center">
        <table className="table table-borderless bg-light table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bus.driver_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BusList;
