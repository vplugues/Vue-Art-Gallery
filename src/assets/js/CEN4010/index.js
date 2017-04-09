/*
  FILENAME:
  DESCRIPTION:
  FUNCTIONS:
  AUTHORS:
*/

const User = require('./Api/User/User');
const Helper = require('./helper');

const ArtGallery = {};

// DESCRIPTION:
// PRE-CONDITION: 
// NOTES:
// POST-CONDITIONS: Returns a callback. An error if the request failed, a success with the result if the request
// when successful.
ArtGallery.checkUserCredential = function (context, username, password, callback) {
  const config = new User(username, password).getUserObject();
  return Helper.makeRequest(context, config, callback);
};


module.exports = ArtGallery;
