'use strict;'

var _ = require('underscore');

var formatFeeds = function(tweets) {
  var newTweets = [];
  _.each(tweets, function(tweet) {
    _.flatten(tweet);
    _.map(tweet, function(tw) {
        // newTweets.push({
        //   //twitter_account: tw.entities.user_mentions[tw.entities.user_mentions.length - 1].screen_name,
        //   tweet: tw.text,
        //   tweeted_on: tw.created_at
        // });
        console.log(tw.entities.user_mentions);
    });
  });

  console.log(newTweets);
};

var getFeeds = function(req, res, validator) {
  var oauth = validator.validate(res.locals.config);

  //TODO: Change two weeks entry to be dynamic
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%40pay_by_phone%20OR%20%40PayByPhone%20OR%20%40PayByPhone_UK%20since%3A2015-09-19&count=30',
    res.locals.config.twitter.access_token,
    res.locals.config.twitter.access_token_secret,
    function(error, data, response) {
      if (error) {
        console.error(error)
      };
      var feeds = formatFeeds(JSON.parse(data));
      //console.log('FEEDS: ' + feeds);
      res.json(feeds);
    });
};

exports.init = function(req, res) {
  var validator = require('../helpers/validation');
  getFeeds(req, res, validator);
};
