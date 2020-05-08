import React, { Component } from "react";
import "../../css/Style.css";
import { connect } from "react-redux";
import SchoolCard from "./SchoolCard";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/" />;
    const schoolCards = this.props.schools.map((school) => (
      <SchoolCard key={school.name} school={school} />
    ));
    return (
      <div id="app" className="container-fluid">
        <div className="content col">
          <div className="schools">
            <div className="row justify-content-center">{schoolCards}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.erkab.schools,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Dashboard);
