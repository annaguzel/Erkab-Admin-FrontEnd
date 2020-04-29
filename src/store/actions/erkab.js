import { GET_SCHOOL, GET_BUSSES } from "./actionTypes";

import instance from "./instance";

export const fetchSchools = () => async (dispatch) => {
  try {
    const res = await instance.get("/schools/");
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
    const res = await instance.get(`/schools/busses/${schoolID}/`);
    const busses = res.data;
    dispatch({
      type: GET_BUSSES,
      payload: busses,
    });
  } catch (error) {
    console.error(error);
  }
};
