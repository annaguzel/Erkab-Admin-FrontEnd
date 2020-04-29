import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";

import { setErrors } from "./errors";
import decode from "jwt-decode";

export const checkForExpiredToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    const user = decode(token);
    if (user.exp >= currentTimeInSeconds) {
      dispatch(setCurrentUser(token));
    }
  } else {
    dispatch(setCurrentUser());
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await instance.post("/login/", userData);
    console.log(res, "res");
    const { access } = res.data;
    dispatch(setCurrentUser(access));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
export const signup = (userData) => async (dispatch) => {
  try {
    const res = await instance.post("/register/", userData);
    const { access } = res.data;
    dispatch(setCurrentUser(access));
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
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    localStorage.removeItem("token");
  }
};
