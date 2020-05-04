import React, { Component } from "react";
import { connect } from "react-redux";
import { postSchool } from "../store/actions";
import { Redirect } from "react-router-dom";
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

  handlePosition = ({ lat, lng }) => this.setState({ lat: lat, lng: lng });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postSchool(this.state, this.props.history);
  };
  render() {
    if (!this.props.user) return <Redirect to="/" />;
    const { name, image } = this.state;
    return (
      <div className="text-center">
        <div className="container mt-5">
          <div className="image">
            <div className="card my-5 mt-5">
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
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      value={image}
                      name="image"
                      placeholder="imageUrl"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-info">
                    ADD
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="image ml-5">
            <LocationPicking handlePosition={this.handlePosition} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postSchool: (newSchool, history) =>
      dispatch(postSchool(newSchool, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolForm);
