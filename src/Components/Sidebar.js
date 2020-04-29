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
        <NavLink to="/routs">Routes</NavLink>
      </h4>
    </section>
    <section>
      <h4 className="menu-item active mb-5 ml-3">
        <NavLink to="/drivers">Drivers</NavLink>
      </h4>
    </section>
    <div className="fixed-bottom">
      <button className="btn btn-info m-2 float-left">Submit</button>
    </div>
  </div>
);

export default Sidebar;
