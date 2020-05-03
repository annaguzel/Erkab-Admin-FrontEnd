import React, { Component } from "react";

class ChildList extends Component {
  render() {
    const child = this.props.child;
    return (
      <div className=" mx-auto mt-2 text-center">
        <table className="table table-borderless bg-light table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{child.name}</td>
              <td> {child.dob}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChildList;
