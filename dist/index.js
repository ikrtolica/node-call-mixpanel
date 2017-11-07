'use strict';

var _api = require('./api');

var api = _interopRequireWildcard(_api);

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

async function callMixpanel(data, token) {
  try {
    let response = await api.track(data, token);
    if (response === 1) {
      console.log('Sent event sucessfully.');
    } else {
      console.log('Mixpanel returned an error.');
    }
  } catch (e) {
    console.log('Error.');
    console.log(e);
  }
}

if (!process.env.MIXPANEL_API_TOKEN) {
  console.log("Error: Missing environment variable MIXPANEL_API_TOKEN.");
  console.log("Please set this env var to your Mixpanel API token.");
  process.exit(1);
}

callMixpanel(_data2.default, process.env.MIXPANEL_API_TOKEN);