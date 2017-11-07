'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callApi = callApi;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkResponseStatus(response) {
  if (response.ok) return response;
  return response.json().then(errData => {
    const error = new Error(errData);
    throw error;
  });
}

function parseResponse(response) {
  return response.status !== 204 ? response.json() : response;
}

function callApi(url, params) {
  return (0, _isomorphicFetch2.default)(url, params).then(res => {
    return res;
  }).then(checkResponseStatus).then(parseResponse).catch(err => {
    throw err;
  });
}