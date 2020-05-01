import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import SchoolCard from "./SchoolCard";

import Sidebar from "./Sidebar";
class Dashboard extends Component {
  render() {
    const schoolCards = this.props.schools.map((school) => (
      <SchoolCard key={school.name} school={school} />
    ));
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light">
            <Sidebar />
          </div>
          <div className="content col-10">
            <div className="schools">
              <div className="row">{schoolCards}</div>
            </div>
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
