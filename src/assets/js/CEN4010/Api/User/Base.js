'use strict';

/*
  FILENAME: Base.js
  DESCRIPTION: Is the class that sets all base configuration for Art Gallery Requests,
  such as the "apiUrl", "headers", "timeout"
*/

const config = require('./../../helper').getEnvironmentVariables();

module.exports = class Base {
  constructor(username, password) {
    this.apiUrl = config.baseUrl;
    this.username = username || '';
    this.password = password || '';
    this.options = {
      timeout: config.timeout,
    };
  }
};