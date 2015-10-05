'use strict;'

var config = {};

config.twitter = {};
config.web = {};
config.redis = {};

config.twitter.consumer_key = process.env.TWITTER_CONSUMER_KEY || 'invalid';
config.twitter.consumer_secret =  process.env.TWITTER_CONSUMER_SECRET || 'invalid';
config.twitter.access_token =  process.env.TWITTER_ACCESS_TOKEN || 'invalid';
config.twitter.access_token_secret =  process.env.ACCESS_TOKEN_SECRET || 'invalid';

config.redis.host = '127.0.0.1';
config.redis.port = 6379;

config.web.port = process.env.WEB_PORT || 3000;

module.exports = config;
