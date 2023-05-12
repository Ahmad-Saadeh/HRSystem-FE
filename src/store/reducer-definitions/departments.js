import { createReducer } from "../createReducerFunc";
import { GET_DEPARTMENTS, GET_DEPARTMENTS_SUCCEED } from "../constants";

const initialState = {
  departments: [],
};

export default createReducer(initialState, {
  [GET_DEPARTMENTS]: (state, payload) => {
    console.log("GET_DEPARTMENTS", state);
    return Object.assign({}, state, {
      departments: payload,
    });
  },
  [GET_DEPARTMENTS_SUCCEED]: (state, payload) => {
    console.log("GET_DEPARTMENTS_SUCCEED", state, payload);
    return Object.assign({}, state, {
      departments: payload,
    });
  },
});
