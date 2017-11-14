import R from 'ramda';
import { callApi } from './apiCall';

const API_SERVER_URL = 'http://api.mixpanel.com/track';

var hasProps = R.has('properties');
var hasToken = R.has('token');

export function track(data, token) {
  if(hasProps(data) && !hasToken(data.properties)) {
      data.properties.token = token;
    }
  } else {
    data.properties = { token: token };
  }

  let stringJSON = JSON.stringify(data);
  let stringData = (new Buffer(stringJSON)).toString('base64');
  let url = `${API_SERVER_URL}/?data=${stringData}`;
  console.log("Sending: ", stringJSON);
  return callApi(url, { method: 'POST' });
}
