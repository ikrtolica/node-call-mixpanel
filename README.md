# Mixpanel from Node
This project is an example implementation of the [Mixpanel HTTP API](https://mixpanel.com/help/reference/http).

See it in action:

![Mixpanel HTTP Node](https://user-images.githubusercontent.com/1186878/32517024-0e61ab1e-c3ba-11e7-92a5-de7e26b8cad1.gif)

# Setup
1. yarn install
2. export MIXPANEL_API_TOKEN = [YOUR-MIXPANEL-API-TOKEN]
3. yarn run compile
4. yarn run start

The API token is required for this to work, obvi.  You can get yours from the Mixpanel project setup screen (copy it from the init call in the script they give you).

# Overview
This project runs in node, using isomorphic-fetch to call the Mixpanel HTTP API. This reads a JSON payload from data.json, adds your Mixpanel token from the environment settings (see above), base64 encodes the payload (as per the Mixpanel spec) and then sends a HTTP POST request to the Mixpanel API endpoint, which is configured in ./src/api/index.js under API_SERVER_URL.

The majority of the work is done in this code:

```JavaScript
  let stringJSON = JSON.stringify(data);
  let stringData = (new Buffer(stringJSON)).toString('base64');
  let url = `${API_SERVER_URL}/?data=${stringData}`;
  console.log("Sending: ", stringJSON);
  return callApi(url, { method: 'POST' });
```

`callAPi` returns a promise, that is resolved once the call to `fetch` completes successfully.

There is some simple error checking.  This project was a take-home assignment for Segment, which you should be using instead of hacking up HTTP API calls on your own.
