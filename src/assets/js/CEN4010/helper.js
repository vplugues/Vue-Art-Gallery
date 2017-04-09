'use strict';

/*
  FILENAME: helper.js
  DESCRIPTION: our helper file that hold all generic functions that have been refactored to be used installing
  multiple areas.
  NOTES: We are using Vue-Resource Http Methods. The error and result are both response objects
  REFERENCES: https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
  AUTHORS:
*/

const Helper = {};

Helper.requestStatus = false;

// DESCRIPTION: Makes http requests, using the node module vue-resource. 
// PRE-CONDITION: All parameters => "context" is *this (vue instance), "config" is an object
// with the fields, or configurations, that will be used as the http request parameters, with addtional
// fields "get" and "post" to determine the type of request.  
// NOTES: It calls massageResponse()
// POST-CONDITIONS: Returns a callback with the http request response. A successful response should be an object.
// A failure should be a string.
Helper.makeRequest = function (context, config, callback) {
  if(config.get === true) {
    context.$http.get(config.url, config.options).then(res => {
      const response = Helper.massageResponse(res.body);
      if (Helper.requestStatus) return callback(null, response);
      return callback(response);
    }, error => {
      const response = Helper.massageResponse(error.body);
      return callback(response);
    });
  } else if(config.get === true) {
    return callback('We are not handling POSTs')
  }
};

// DESCRIPTION: Massages the http request's response body.
// PRE-CONDITION: Parameter => "body" has to be an object, at the very least with the key value of "data",
// where "data" represents the results of the request.
// NOTES: requestStatus is being used to later determine failure/successful request.
// POST-CONDITIONS: Returns object with data or string with error message.
Helper.massageResponse = (body) => {
  Helper.requestStatus = false;
  if(body === null) return 'Error Making Your Request: Possible Timeout or Connection Issue';
  if (body.status && body.status.status === false) return body.status.description;
  if (body.statusCode) return body.message || body.error || body.statusCode;
  Helper.requestStatus = true;
  return body.data;
};

// DESCRIPTION: Sets environment variables.
// PRECONDITION: Must require a config file.
// NOTES: We are not using the node modules config and dotenv becuase installing these were
// giving us errors, so we extracted the config.json file entirely and the ability to use dotenv 
// POST-CONDITIONS: Returns an object with the configuration options. 
Helper.getEnvironmentVariables = () => {
  const config = require('./config');
  const sdk = config.application;
  return sdk;
};

module.exports = Helper;
