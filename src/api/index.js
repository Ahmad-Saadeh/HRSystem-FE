const API_ROOT = "http://localhost:8000/api";

const API_URLS = (extraData) => ({
  ROOT: API_ROOT,
  CANDIDATES: {
    CANDIDATES_LIST: API_ROOT + "/candidate-list/",
    CREATE_CANDIDATE: API_ROOT + "/candidate-details/",
    DEPARTMENTS_LIST: API_ROOT + "/departments-list/",
  },
});

export default API_URLS;
