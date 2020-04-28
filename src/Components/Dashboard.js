import React, { Component } from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import bus from "../images/bus.png";
class Home extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light">
            <Sidebar />
          </div>
          <div className="content col-10">
            <div className="schools">
              <h3>Schools</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={bus}
                      alt="school name"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>School Name</span>
                    </h5>
                    <small className="card-text">Location</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
