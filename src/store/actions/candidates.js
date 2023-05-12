import {
  GET_CANDIDATES_LIST,
  CREATE_CANDIDATE,
  GET_DEPARTMENTS,
} from "../constants";

export function getCandidatesList(payload) {
  return {
    type: GET_CANDIDATES_LIST,
    payload: payload,
  };
}

export function createCandidate(payload) {
  console.log("aaaaction", payload);
  return {
    type: CREATE_CANDIDATE,
    payload: payload,
  };
}

export function getDepartments(payload) {
  return {
    type: GET_DEPARTMENTS,
    payload: payload,
  };
}
