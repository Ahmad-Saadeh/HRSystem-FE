import { all } from "redux-saga/effects";
import {
  getCandidatesListWatcher,
  createCandidateWatcher,
  getDepartmentsWatcher,
} from "./sagas-definitions/candidates";

function* appSagas() {
  yield all([
    getCandidatesListWatcher(),
    createCandidateWatcher(),
    getDepartmentsWatcher(),
  ]);
}

export default appSagas;
