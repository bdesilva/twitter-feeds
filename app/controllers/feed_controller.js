'use strict;'

var getFeeds = function(req, res, validator, feeds) {
  var oauth = oauthBuilder.build(res.locals.config);

  //TODO: Change two weeks entry to be dynamic
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%40pay_by_phone%20OR%20%40PayByPhone%20OR%20%40PayByPhone_UK%20since%3A2015-09-19&count=30',
    res.locals.config.twitter.access_token,
    res.locals.config.twitter.access_token_secret,
    function(error, data, response) {
      if (error) {
        console.error(error)
      };

      res.json(feeds(JSON.parse(data)));
    });
};

exports.init = function(req, res) {
  var oauthBuilder = require('../models/oauth_builder');
  var feeds = require('../models/feeds');
  getFeeds(req, res, validator, feeds);
};
