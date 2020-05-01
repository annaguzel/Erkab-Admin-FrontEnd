import { GET_SCHOOL, SET_BUSSES, ADD_SCHOOL } from "./actionTypes";

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

export const postSchool = (school) => async (dispatch) => {
  try {
    const res = await instance.post("/add/school/", school);
    const newSchool = res.data;
    dispatch({
      type: ADD_SCHOOL,
      payload: newSchool,
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
