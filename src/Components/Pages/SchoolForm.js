import React, { Component } from "react";
import { connect } from "react-redux";
import { postSchool } from "../../store/actions";
import { Redirect } from "react-router-dom";
import LocationPicking from "./LocationPicking";
class SchoolForm extends Component {
  state = {
    name: "",
    image: null,
    lat: "",
    lng: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handlePosition = ({ lat, lng }) => this.setState({ lat: lat, lng: lng });
  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let form_data = new FormData();
    form_data.append("name", this.state.name);
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("lat", this.state.lat);
    form_data.append("lng", this.state.lng);
    this.props.postSchool(form_data, this.props.history, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };
  render() {
    if (!this.props.user) return <Redirect to="/" />;
    const { name } = this.state;
    return (
      <div className="text-center">
        <div className="container mt-5">
          <div className="image">
            <div className="card text-center ml-5">
              <div class="card-header">
                <h3 className="display-4"> Add School</h3>
              </div>
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
                  <div className="form-group mb-3">
                    <label htmlFor="image">Image </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      accept="image/png, image/jpeg"
                      placeholder="UploadImage"
                      onChange={this.handleImageChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    ADD SCHOOL
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
