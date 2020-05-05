import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { deleteSchool } from "../store/actions";
import bus from "../images/bus.png";

const SchoolCard = ({ school, deleteSchool }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/busses/${school.id}`}>
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={school.image ? school.image : bus}
            alt={school.name}
          />
        </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <span>{school.name}</span>
        </h5>

        <small className="card-text">
          Location: {school.lat + "," + school.lng}
        </small>
        {/* <button
          type="button"
          className="btn btn-danger ml-5 "
          onClick={() => deleteSchool(school)}
        >
          DELETE
        </button> */}
      </div>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteSchool: (school) => dispatch(deleteSchool(school)),
//   };
// };
export default SchoolCard;
