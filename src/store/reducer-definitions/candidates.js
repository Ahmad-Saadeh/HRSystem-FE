import { createReducer } from "../createReducerFunc";
import { GET_CANDIDATES_LIST_SUCCEED, GET_CANDIDATES_LIST } from "../constants";

const initialState = {
  candidates: [],
};

export default createReducer(initialState, {
  [GET_CANDIDATES_LIST]: (state, payload) => {
    console.log("GET_CANDIDATES_LIST_SUCCEED15", state);

    return Object.assign({}, state, {
      candidates: payload,
    });
  },
  [GET_CANDIDATES_LIST_SUCCEED]: (state, payload) => {
    console.log("GET_CANDIDATES_LIST_SUCCEED155", state, payload);
    return Object.assign({}, state, {
      candidates: payload,
    });
  },
});
