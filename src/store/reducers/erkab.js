import {
  GET_SCHOOL,
  SET_BUSSES,
  SET_CHILDREN,
  ADD_SCHOOL,
  ADD_DRIVER,
  FETCH_ROUTE,
} from "../actions/actionTypes";

const initialState = {
  schools: [],
  busses: [],
  children: [],
  route: [],
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
    case SET_CHILDREN:
      return {
        ...state,
        children: action.payload,
      };
    case FETCH_ROUTE:
      return {
        ...state,
        route: action.payload,
      };
    case ADD_SCHOOL:
      return {
        ...state,
        schools: [action.payload, ...state.schools],
      };
    case ADD_DRIVER:
      return {
        ...state,
        busses: [action.payload, ...state.busses],
      };
    // case DELETE_SCHOOL:
    //   return {
    //     ...state,
    //     schools: state.schools.filter((school) => school !== action.payload),
    //   };
    // case DELETE_BUS:
    //   return {
    //     ...state,
    //     busses: state.busses.filter((bus) => bus !== action.payload),
    //   };
    default:
      return state;
  }
};

export default erkabReducer;
