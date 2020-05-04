import {
  GET_SCHOOL,
  SET_BUSSES,
  SET_CHILDREN,
  ADD_SCHOOL,
  ADD_DRIVER,
} from "./actionTypes";

import instance from "./instance";

export const fetchSchools = () => async (dispatch) => {
  try {
    const res = await instance.get(`/schools/`);
    const schools = res.data;
    dispatch({
      type: GET_SCHOOL,
      payload: schools,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchBusses = (schoolID) => async (dispatch) => {
  try {
    const res = await instance.get(`/school/${schoolID}/busses/`);
    const busses = res.data;
    dispatch({
      type: SET_BUSSES,
      payload: busses,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchChildren = (schoolID) => async (dispatch) => {
  try {
    const res = await instance.get(`/school/${schoolID}/children/`);
    const children = res.data;
    dispatch({
      type: SET_CHILDREN,
      payload: children,
    });
  } catch (error) {
    console.error(error);
  }
};

export const postSchool = (school, history) => async (dispatch) => {
  try {
    const res = await instance.post("/add/school/", school);
    const newSchool = res.data;
    dispatch({
      type: ADD_SCHOOL,
      payload: newSchool,
    });
    history.push("/dashboard");
  } catch (error) {
    console.error(error);
  }
};

export const addDriver = (driver, schoolID, history) => async (dispatch) => {
  try {
    const res = await instance.post(`/add/busdriver/${schoolID}/`, driver);
    const newDriver = res.data;
    dispatch({
      type: ADD_DRIVER,
      payload: newDriver,
    });
    history.push("/dashboard");
  } catch (error) {
    console.error(error);
  }
};
