'use strict;'

var config = {};

config.twitter = {};
config.web = {};

config.twitter.consumer_key = process.env.TWITTER_CONSUMER_KEY || 'invalid';
config.twitter.consumer_secret =  process.env.TWITTER_CONSUMER_SECRET || 'invalid';
config.twitter.access_token =  process.env.TWITTER_ACCESS_TOKEN || 'invalid';
config.twitter.access_token_secret =  process.env.ACCESS_TOKEN_SECRET || 'invalid';

config.web.port = process.env.WEB_PORT || 3000;

module.exports = config;
