'use strict;'

var OAuth = require('OAuth');

var buildOAuthObject = function(config) {
  //TODO: Input logic to determine if env creds are missing.
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    config.twitter.consumer_key,
    config.twitter.consumer_secret,
    '1.0A',
    'http://127.0.0.1:3000/sessions/callback',
    'HMAC-SHA1'
  );

  return oauth;
};

exports.validate = function(config) {
  return buildOAuthObject(config);
};
