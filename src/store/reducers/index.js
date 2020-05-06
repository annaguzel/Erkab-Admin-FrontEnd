import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import erkabReducer from "./erkab";
import dashboardReducer from "./dashboard-reducer";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  erkab: erkabReducer,
  dashboard: dashboardReducer,
});
