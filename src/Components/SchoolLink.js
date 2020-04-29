import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SchoolLink = ({ school }) => (
  <Nav.Link>
    <NavLink className="nav-link" to={`/busses/${school.id}`}>
      {school.name}
    </NavLink>
  </Nav.Link>
  // </li>
);

export default SchoolLink;
