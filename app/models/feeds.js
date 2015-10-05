'use strict;'

var _ = require('underscore');
var moment = require('moment');

function sortByMilliseconds(tw_a, tw_b) {
  if (tw_a.tweeted_on < tw_b.tweeted_on) return 1;
  if (tw_a.tweeted_on > tw_b.tweeted_on) return -1;
  return 0;
};

function distinguishMentions(tweets, Key) {
  _.flatten(tweets);
  var counter = 0;

  _.each(tweets, function(tweet) {
    counter += tweet.match(/@\w+/g).length;
  });
  return counter;
};

exports.formatFeeds = function(tweets) {
  var formattedTweets = [];

  _.each(tweets, function(tweet) {
    _.flatten(tweet);

    var filtered = _.filter(tweet, function(match) {
      return match.entities && match.entities.user_mentions && match.entities.user_mentions.length > 0;
    });

    _.map(filtered, function(tw) {
      formattedTweets.push({
        twitter_id: tw.entities.user_mentions[0].id,
        twitter_account: tw.entities.user_mentions[0].screen_name,
        tweet: tw.text,
        tweeted_on: moment(new Date(tw.created_at)).valueOf()
      });
    });
  });

  formattedTweets.sort(sortByMilliseconds);

  _.mapObject(formattedTweets, function(val, key) {
    return val.tweeted_on = moment(new Date(val.tweeted_on)).fromNow();
  });

  return formattedTweets;
};

exports.filterTweetsByAccount = function(tweets) {
  return _.countBy(tweets, function(tweet) {
    return tweet.twitter_account;
  });
};

exports.foreignUserCount = function(tweets) {
  return result = _.chain(tweets)
    .groupBy('twitter_account')
    .map(function(value, key) {
      return {
        twitter_account: key,
        mentions: distinguishMentions(_.pluck(value, 'tweet'), key)
      }
    })
    .value();
};
