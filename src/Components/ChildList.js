import React, { Component } from "react";
import { connect } from "react-redux";

class ChildList extends Component {
  render() {
    const child = this.props.child;

    return (
      <div className="text-center">
        <ul class="list-group">
          <li class="list-group-item block">Name: {child.name}</li>
          <li class="list-group-item block">Date of Birth: {child.dob}</li>
        </ul>
      </div>
    );
  }
}

export default ChildList;
