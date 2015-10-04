'use strict;'

var getFeeds = function(req, res, validator) {
  var oauth = validator.validate(res.locals.config);

  res.send('Twitter Feeds! ' + JSON.stringify(oauth));
};

exports.init = function(req, res) {
  var validator = require('../helpers/validation');
  getFeeds(req, res, validator);
};
