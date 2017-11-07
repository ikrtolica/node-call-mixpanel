# Mixpanel from Node
This project is an example implementation of the [Mixpanel HTTP API](https://mixpanel.com/help/reference/http).

# Setup
1. yarn install
2. export MIXPANEL_API_TOKEN = [YOUR-MIXPANEL-API-TOKEN]
3. yarn run compile
4. yarn run start

The API token is required for this to work, obvi.  You can get yours from the Mixpanel project setup screen (copy it from the init call in the script they give you).

# Overview
This project runs in node, using isomorphic-fetch to call the Mixpanel HTTP API. This reads a JSON payload from data.json, adds your Mixpanel token from the environment settings (see above), base64 encodes the payload (as per the Mixpanel spec) and then sends a HTTP POST request to the Mixpanel API endpoint, which is configured in ./src/api/index.js under API_SERVER_URL.

There is some simple error checking.  This project was a take-home assignment for Segment, which you should be using instead of hacking up HTTP API calls on your own.
