import React from "react";
import { Link } from "react-router-dom";
import bus from "../../images/bus.png";

const SchoolCard = ({ school, deleteSchool }) => {
  return (
    <div className="card w-25 mx-4 mt-2 mb-2">
      <Link to={`/busses/${school.id}`}>
        <div className="image">
          <img
            className="card-img-top img-fluid py-2 px-2"
            src={school.image ? school.image : bus}
            alt={school.name}
          />
        </div>
      </Link>
      <div className="card-body text-center">
        <Link to={`/busses/${school.id}`}>
          <button className="btn btn-info">{school.name}</button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCard;
