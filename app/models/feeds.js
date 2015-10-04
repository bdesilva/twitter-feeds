'use strict;'

var _ = require('underscore');

exports.formatFeeds = function(tweets) {
  var formattedTweets = [];

  _.each(tweets, function(tweet) {
    _.flatten(tweet);

    var filtered = _.filter(tweet, function(match) {
      if (match.entities && match.entities.user_mentions && match.entities.user_mentions.length > 0) {
        return _.every(match.entities.user_mentions, function(user) {
          return user.screen_name === 'pay_by_phone' || user.screen_name === 'PayByPhone' || user.screen_name === 'PayByPhone_UK';
        });
      }
    });

    _.map(filtered, function(tw) {
      formattedTweets.push({
        twitter_account: tw.entities.user_mentions[0].screen_name,
        tweet: tw.text,
        tweeted_on: tw.created_at
      });
    });
  });

  //console.log('Formatted Tweets: ' + JSON.stringify(formattedTweets));
  return formattedTweets;
};
