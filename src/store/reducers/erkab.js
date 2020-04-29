import { GET_SCHOOL, GET_BUSSES } from "../actions/actionTypes";

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
    case GET_BUSSES:
      return {
        ...state,
        busses: action.payload,
      };

    default:
      return state;
  }
};

export default erkabReducer;
