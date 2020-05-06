import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  DashboardIcon,
  ListItemText,
} from "../includes";
import SchoolIcon from "@material-ui/icons/School";
import { Link } from "react-router-dom";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
export const mainListItems = (
  <Fragment>
    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/add/school/" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Add School" />
      </ListItem>
    </Link>
    <Link to="/add/driver" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DirectionsBusIcon />
        </ListItemIcon>
        <ListItemText primary="Add Driver" />
      </ListItem>
    </Link>
    {/* <Link to="/raporlar" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Raporlar" />
      </ListItem>
    </Link>
    <Link to="/entegrasyonlar" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Entegrasyonlar" />
      </ListItem>
    </Link> */}
  </Fragment>
);
