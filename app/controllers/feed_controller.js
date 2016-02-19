'use strict;'

var getOauth = function (config, oauthBuilder, Q) {
  var deferred = Q.defer();
  var oauth = oauthBuilder.build(config);

  //TODO: Change two weeks entry to be dynamic
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%40EA%20OR%20%40EASPORTS%20OR%20%40EA_Ca%20since%3A2015-09-19&count=30',
    config.twitter.access_token,
    config.twitter.access_token_secret,
    function(error, data, response) {
      if (error) {
        deferred.reject(error);
      };

      deferred.resolve(JSON.parse(data));
    });

    return deferred.promise;
};

exports.feed = function(req, res) {
  var Q = require('q');
  var feeds = require('../models/feeds');

  var oauthBuilder = require('../models/oauth_builder');

  getOauth(res.locals.config, oauthBuilder, Q)
  .then(function (data) {
    res.json(feeds(data));
  })
  .fail(function(error) {
    console.error(error);
  })
  .done();
};
