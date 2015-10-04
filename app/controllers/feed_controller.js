'use strict;'

var getFeeds = function(req, res, validator) {
  var oauth = validator.validate(res.locals.config);

  oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%40pay_by_phone',
      res.locals.config.twitter.access_token,
      res.locals.config.twitter.access_token_secret,
      function (error, data, response){
        if (error){ console.error(error)};
        res.json(JSON.parse(data));
      });
};

exports.init = function(req, res) {
  var validator = require('../helpers/validation');
  getFeeds(req, res, validator);
};
