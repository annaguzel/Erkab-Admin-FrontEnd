import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBusses, fetchChildren } from "../store/actions";
import BusList from "./BusList";
import ChildList from "./ChildList";
import { Redirect } from "react-router-dom";

class Bus extends Component {
  componentDidMount() {
    const schoolID = this.props.match.params.schoolID;
    this.props.fetchBusses(schoolID);
    this.props.fetchChildren(schoolID);
  }

  componentDidUpdate(prevProps) {
    const schoolID = this.props.match.params.schoolID;
    if (schoolID !== prevProps.match.params.schoolID) {
      this.props.fetchBusses(schoolID);
      this.props.fetchChildren(schoolID);
    }
  }

  render() {
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    busses: state.erkab.busses,
    children: state.erkab.children,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusses: (schoolID) => dispatch(fetchBusses(schoolID)),
    fetchChildren: (schoolID) => dispatch(fetchChildren(schoolID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
