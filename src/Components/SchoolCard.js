import React from "react";
import { Link } from "react-router-dom";

import schoolimage from "../images/school.png";
const SchoolCard = ({ school }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/busses/${school.id}`}>
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={school.image ? school.image : schoolimage}
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
      </div>
    </div>
  );
};

export default SchoolCard;
