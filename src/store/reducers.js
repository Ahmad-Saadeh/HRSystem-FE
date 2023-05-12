import { combineReducers } from "redux";
import candidates from "./reducer-definitions/candidates";
import departments from "./reducer-definitions/departments";

export default combineReducers({
  candidates: candidates,
  departments: departments,
});
