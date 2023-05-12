import fetch from "isomorphic-fetch";
import store from "./index";
import API_URLS from "../api";
import cookie from "js-cookie";

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status <= 300) {
    return response;
  }
  let error;
  var hr = window.location.href;
  if (response) {
    error = new Error(response.message || response.status);
  } else {
    error = new Error(response.statusText);
  }
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

export function requestAPI(data) {
  return fetch(data.url, {
    // data.url
    method: data.method || "GET",
    // body: JSON.stringify(data.body),
    body: data.body,
    headers: {
      Accept: data.accept || "application/json",
      "Content-Type": data.contentType || "application/json",
      Authorization: cookie.get("token") || undefined,
      "X-ADMIN": "1",
    },
  })
    .then(checkHttpStatus)
    .then(parseJSON);
}
