import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <div id="sidebar">
    <section>
      <h4 className="menu-item active mt-5 mb-5 ml-3">
        <NavLink to="/">Schools</NavLink>
      </h4>
    </section>
    <section>
      <h4 className="menu-item active mb-5 ml-3">
        <NavLink to="/add/school">Add School</NavLink>
      </h4>
    </section>
    <section>
      <h4 className="menu-item active mb-5 ml-3">
        <NavLink to="/add/driver">Add Driver</NavLink>
      </h4>
    </section>
  </div>
);

export default Sidebar;
