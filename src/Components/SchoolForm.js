import React, { Component } from "react";
import { connect } from "react-redux";
import { postSchool } from "../store/actions";
import { Link } from "react-router-dom";
import LocationPicking from "./LocationPicking";

class SchoolForm extends Component {
  state = {
    name: "",
    image: "",
    lat: "",
    lng: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postSchool(this.state);
  };
  render() {
    const { name, image, lat, lng } = this.state;
    return (
      <div>
        <div className="container mt-5">
          <div className="image">
            <div className="col-6 mx-auto">
              <div className="card my-5">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="school_name">School Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        name="name"
                        placeholder="School name"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Image Url</label>
                      <input
                        type="imageUrl"
                        className="form-control"
                        id="imageUrl"
                        value={image}
                        name="imageUrl"
                        placeholder="imageUrl"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="latitude">Latitude</label>
                      <input
                        type="latitude"
                        className="form-control"
                        id="latitude"
                        value={lat}
                        name="latitude"
                        placeholder="latitude"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="longtitude">Longtitude</label>
                      <input
                        type="longtitude"
                        className="form-control"
                        id="longtitude"
                        value={lng}
                        name="longtitude"
                        placeholder="longtitude"
                        onChange={this.handleChange}
                      />
                    </div>
                    <Link to="/">
                      <button type="submit" className="btn btn-info">
                        ADD
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <LocationPicking />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postSchool: (newSchool) => dispatch(postSchool(newSchool)),
  };
};

export default connect(null, mapDispatchToProps)(SchoolForm);
