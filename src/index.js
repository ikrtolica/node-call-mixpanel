import * as api from './api';
import example_data from './data.json';

async function callMixpanel(data, token) {
  try {
    let response = await api.track(data, token);
    if(response === 1) {
      console.log('Sent event sucessfully.');
    } else {
      console.log('Mixpanel returned an error.');
    }
  } catch (e) {
    console.log('Error.');
    console.log(e);
  }
}

if(!process.env.MIXPANEL_API_TOKEN) {
  console.log("Error: Missing environment variable MIXPANEL_API_TOKEN.");
  console.log("Please set this env var to your Mixpanel API token.");
  process.exit(1);
}

callMixpanel(example_data, process.env.MIXPANEL_API_TOKEN);
