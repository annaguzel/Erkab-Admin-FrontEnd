import { DASHBOARD_DRAWER_OPEN } from "./actionTypes";
export const drawerOpenStatus = (drawerOpen) => {
  const type = DASHBOARD_DRAWER_OPEN;
  return { type, drawerOpen };
};

export const drawerOpenClick = (drawerOpen) => {
  return (dispatch) => {
    dispatch(drawerOpenStatus(drawerOpen));
  };
};
