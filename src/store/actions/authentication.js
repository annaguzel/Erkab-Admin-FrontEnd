import { SET_CURRENT_USER } from "./actionTypes";
import { setErrors } from "./errors";
import decode from "jwt-decode";
import { fetchSchools } from "./erkab";
import instance from "./instance";

export const checkForExpiredToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("1");
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    console.log("2");

    const user = decode(token);
    console.log(user.exp, "exp");
    console.log(currentTimeInSeconds, "Time in seconds");

    if (user.exp >= currentTimeInSeconds) {
      console.log(token, "token");
      dispatch(setCurrentUser(token));
      dispatch(fetchSchools());
    }
  } else {
    console.log("3");
    dispatch(setCurrentUser());
  }
};
export const login = (userData) => async (dispatch) => {
  try {
    const res = await instance.post("/login/", userData);
    console.log(res, "res");
    const { access } = res.data;
    dispatch(setCurrentUser(access));
    dispatch(fetchSchools());
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export const logout = () => setCurrentUser();
const setCurrentUser = (token) => {
  setAuthToken(token);
  const user = token ? decode(token) : null;
  return { type: SET_CURRENT_USER, payload: user };
};
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    localStorage.removeItem("token");
  }
};
