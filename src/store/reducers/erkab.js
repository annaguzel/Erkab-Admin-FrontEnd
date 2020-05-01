import { GET_SCHOOL, SET_BUSSES, ADD_SCHOOL } from "../actions/actionTypes";

const initialState = {
  schools: [],
  busses: [],
};

const erkabReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL:
      return {
        ...state,
        schools: action.payload,
      };
    case SET_BUSSES:
      return {
        ...state,
        busses: action.payload,
      };
    case ADD_SCHOOL:
      const newSchool = action.payload;
      return [newSchool, ...state];
    default:
      return state;
  }
};

export default erkabReducer;
