import fetch from 'isomorphic-fetch';

function checkResponseStatus(response) {
  if (response.ok) return response;
  return response.json()
    .then(errData => {
      const error = new Error(errData);
      throw error;
    });
}

function parseResponse(response) {
  return response.status !== 204 ? response.json() : response;
}

export function callApi(url, params) {
  return fetch(url, params)
    .then(res => {
      return res;
    })
    .then(checkResponseStatus)
    .then(parseResponse)
    .catch(err => {
      throw err;
    });
}
