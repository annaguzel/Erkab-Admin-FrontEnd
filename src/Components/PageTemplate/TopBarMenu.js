import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  classNames,
  AppBar,
  Toolbar,
  Typography,
  MenuIcon,
  Drawer,
  List,
  Divider,
  IconButton,
  ChevronLeftIcon,
} from "../includes";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import { drawerOpenClick } from "../includes/actions";
import { mainListItems } from "./MenuItem";
import AuthButton from "../Pages/AuthButton";

class TopBarMenu extends Component {
  handleDrawerOpen = () => {
    this.props.drawerOpenClick(!this.props.dashboard.drawerOpen);
  };

  render() {
    const { drawerOpen } = this.props.dashboard;
    const { classes } = this.props;

    return (
      <Fragment>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            drawerOpen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                drawerOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <DirectionsBusIcon />
            <Typography
              component="h2"
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              ErKab
            </Typography>

            <AuthButton />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !drawerOpen && classes.drawerPaperClose
            ),
          }}
          open={drawerOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerOpen}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  drawerOpenClick: drawerOpenClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarMenu);
