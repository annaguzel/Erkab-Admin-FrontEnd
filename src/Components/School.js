import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBusses } from "../store/actions";
import "../App.css";
class Bus extends Component {
  componentDidMount() {
    const schoolID = this.props.match.params.schoolID;
    this.props.fetchBusses(schoolID);
  }

  componentDidUpdate(prevProps) {
    const schoolID = this.props.match.params.schoolID;
    if (schoolID !== prevProps.match.params.schoolID) {
      this.props.fetchBusses(schoolID);
    }
  }

  render() {
    const busCards = this.props.busses.map((bus) => (
      <busCard key={bus.driver_name + bus.id} bus={bus} />
    ));
    return (
      <div className="text-center">
        <h3 style={{ color: "white" }}>Buses:</h3>
        <div className="row mx-4">{busCards}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    busses: state.erkab.busses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusses: (schoolID) => dispatch(fetchBusses(schoolID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
