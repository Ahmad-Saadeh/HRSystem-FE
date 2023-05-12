import { put, takeLatest } from "redux-saga/effects";
import { requestAPI } from "../helpers";
import {
  GET_CANDIDATES_LIST,
  GET_CANDIDATES_LIST_SUCCEED,
  GET_CANDIDATES_LIST_FAILURE,
  CREATE_CANDIDATE,
  CREATE_CANDIDATE_SUCCEED,
  CREATE_CANDIDATE_FAILURE,
  GET_DEPARTMENTS,
  GET_DEPARTMENTS_SUCCEED,
  GET_DEPARTMENTS_FAILURE,
} from "../constants";

import API_URLS from "../../api";

export function* getCandidatesList(action) {
  try {
    let data = {
      url: API_URLS().CANDIDATES.CANDIDATES_LIST,
      method: "GET",
    };
    const response = yield requestAPI(data); //data
    yield put({ type: GET_CANDIDATES_LIST_SUCCEED, payload: response });
  } catch (e) {
    yield put({ type: GET_CANDIDATES_LIST_FAILURE, error: new Error(e) });
  }
}

export function* getCandidatesListWatcher() {
  yield takeLatest(GET_CANDIDATES_LIST, getCandidatesList);
}

export function* createCandidate(action) {
  console.log("sagaaaa", action);
  try {
    let data = {
      url: API_URLS().CANDIDATES.CREATE_CANDIDATE,
      method: "POST",
      body: action.payload.data,
    };
    const response = yield requestAPI(data); //data
    yield put({ type: CREATE_CANDIDATE_SUCCEED, payload: response });
  } catch (e) {
    yield put({ type: CREATE_CANDIDATE_FAILURE, error: new Error(e) });
  }
}

export function* createCandidateWatcher() {
  yield takeLatest(CREATE_CANDIDATE, createCandidate);
}

export function* getDepartments(action) {
  try {
    let data = {
      url: API_URLS().CANDIDATES.DEPARTMENTS_LIST,
      method: "GET",
    };
    const response = yield requestAPI(data); //data
    yield put({ type: GET_DEPARTMENTS_SUCCEED, payload: response });
  } catch (e) {
    yield put({ type: GET_DEPARTMENTS_FAILURE, error: new Error(e) });
  }
}

export function* getDepartmentsWatcher() {
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
}
