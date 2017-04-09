'use strict';
/*
  FILENAME:
  DESCRIPTION:
*/

const config = require('./../../helper').getEnvironmentVariables();
const Base = require('./Base');

module.exports = class User extends Base {
  constructor(username, password, firstName, lastName) {
    super(username, password);
    this.firstName = firstName || '';
    this.lastName = lastName || '';
  }

  // Description:
  // Notes: Intentions are that this function will be used to return the configuration
  // object for http-requests.
  // Post-Condition: Returns an object that ultimately follows the Vue-Resource
  // http request get paramters
  getUserObject() {
    const endpoint = config.endpoints.sessionsCreate;
    return {
      url: endpoint,
      get: (config.endpoints.sessionsCreate.method === 'GET') ? true : false,
      post: (config.endpoints.sessionsCreate.method === 'POST') ? true : false,
      options: this.options,
    };
  }
};
