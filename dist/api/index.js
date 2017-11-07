'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _apiCall = require('./apiCall');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const API_SERVER_URL = 'http://api.mixpanel.com/track';

var hasProps = _ramda2.default.has('properties');
var hasToken = _ramda2.default.has('token');

function track(data, token) {
  if (hasProps(data)) {
    if (!hasToken(data.properties)) {
      data.properties.token = token;
    }
  } else {
    data.properties = { token: token };
  }

  let stringJSON = JSON.stringify(data);
  let stringData = new Buffer(stringJSON).toString('base64');
  let url = `${API_SERVER_URL}/?data=${stringData}`;
  console.log("Sending: ", stringJSON);
  return (0, _apiCall.callApi)(url, { method: 'POST' });
}