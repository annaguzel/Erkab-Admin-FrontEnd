import React, { Fragment } from "react";

import { ListItem, ListItemIcon, ListItemText } from "../includes";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
export const mainListItems = (
  <Fragment>
    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon style={{ fill: "#008DB3" }} />
        </ListItemIcon>
        <ListItemText secondary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/add/school/" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon style={{ fill: "#008DB3" }} />
        </ListItemIcon>
        <ListItemText secondary="Add School" />
      </ListItem>
    </Link>
    <Link to="/add/driver" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DirectionsBusIcon style={{ fill: "#008DB3" }} />
        </ListItemIcon>
        <ListItemText secondary="Add Driver" />
      </ListItem>
    </Link>
  </Fragment>
);
