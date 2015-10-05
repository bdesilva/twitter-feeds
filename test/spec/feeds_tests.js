'use strict;'

var assert = require('chai').assert,
  moment = require('moment'),
  feeds = require('../../app/models/feeds');

var testFeed = {
  "statuses": [{
    "metadata": {
      "iso_language_code": "fr",
      "result_type": "recent"
    },
    "created_at": "Sun Oct 04 15:43:01 +0000 2015",
    "id": 650697639479144400,
    "id_str": "650697639479144448",
    "text": "@PayByPhone \nBjr, Pouvez vous m'indiquer la procédure pour un débit réalisé à tors\n29/09/2015  ACHAT CB STATIOMT05HORO 26.09.15\nCARTE NUMERO",
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": 31749548,
    "in_reply_to_user_id_str": "31749548",
    "in_reply_to_screen_name": "PayByPhone",
    "user": {
      "id": 47718369,
      "id_str": "47718369",
      "name": "Raphael Jeannin",
      "screen_name": "RaphaelJeannin",
      "location": "",
      "description": "",
      "url": "http://t.co/yX9TqDv2kJ",
      "entities": {
        "url": {
          "urls": [{
            "url": "http://t.co/yX9TqDv2kJ",
            "expanded_url": "http://parisnationvendsappt72m2.strikingly.com/",
            "display_url": "…risnationvendsappt72m2.strikingly.com",
            "indices": [
              0,
              22
            ]
          }]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 11,
      "friends_count": 20,
      "listed_count": 2,
      "created_at": "Tue Jun 16 19:27:33 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 7200,
      "time_zone": "Amsterdam",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 35,
      "lang": "fr",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_6_normal.png",
      "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_6_normal.png",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": true,
      "following": false,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [{
        "screen_name": "PayByPhone",
        "name": "PayByPhone",
        "id": 31749548,
        "id_str": "31749548",
        "indices": [
          0,
          11
        ]
      }],
      "urls": []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "fr"
  }, {
    "metadata": {
      "iso_language_code": "lt",
      "result_type": "recent"
    },
    "created_at": "Sun Oct 04 08:27:24 +0000 2015",
    "id": 650588014511562800,
    "id_str": "650588014511562752",
    "text": "@ComNpay @pay_by_phone @paylevenFR #Bitcoin #cryptomonnaies #blockchains techno disruptive #paiements #monetique : http://t.co/NIRpOU8n4I",
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": 1949203190,
    "in_reply_to_user_id_str": "1949203190",
    "in_reply_to_screen_name": "ComNpay",
    "user": {
      "id": 1110003721,
      "id_str": "1110003721",
      "name": "Moneticien",
      "screen_name": "Moneticien",
      "location": "France",
      "description": "Actualité #Monetique #CyberSecurite #FinTech #CryptoCurrency #CarteBancaire #ECommerce #Banque et enjeux du #Paiement sur @Moneticien.",
      "url": "http://t.co/5kutxjWvLF",
      "entities": {
        "url": {
          "urls": [{
            "url": "http://t.co/5kutxjWvLF",
            "expanded_url": "http://www.moneticien.com",
            "display_url": "moneticien.com",
            "indices": [
              0,
              22
            ]
          }]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 432,
      "friends_count": 256,
      "listed_count": 42,
      "created_at": "Mon Jan 21 20:25:28 +0000 2013",
      "favourites_count": 32,
      "utc_offset": 7200,
      "time_zone": "Paris",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 1403,
      "lang": "fr",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/461648163258896384/etbchbyf_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/461648163258896384/etbchbyf_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1110003721/1363004399",
      "profile_link_color": "009999",
      "profile_sidebar_border_color": "EEEEEE",
      "profile_sidebar_fill_color": "EFEFEF",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "entities": {
      "hashtags": [{
        "text": "Bitcoin",
        "indices": [
          35,
          43
        ]
      }, {
        "text": "cryptomonnaies",
        "indices": [
          44,
          59
        ]
      }, {
        "text": "blockchains",
        "indices": [
          60,
          72
        ]
      }, {
        "text": "paiements",
        "indices": [
          91,
          101
        ]
      }, {
        "text": "monetique",
        "indices": [
          102,
          112
        ]
      }],
      "symbols": [],
      "user_mentions": [{
        "screen_name": "ComNpay",
        "name": "ComNpay",
        "id": 1949203190,
        "id_str": "1949203190",
        "indices": [
          0,
          8
        ]
      }, {
        "screen_name": "pay_by_phone",
        "name": "PayByPhone",
        "id": 36187508,
        "id_str": "36187508",
        "indices": [
          9,
          22
        ]
      }, {
        "screen_name": "paylevenFR",
        "name": "payleven France",
        "id": 1951124910,
        "id_str": "1951124910",
        "indices": [
          23,
          34
        ]
      }],
      "urls": [{
        "url": "http://t.co/NIRpOU8n4I",
        "expanded_url": "http://bit.ly/1JMugBx",
        "display_url": "bit.ly/1JMugBx",
        "indices": [
          115,
          137
        ]
      }]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "lt"
  }]
};

describe('Feeds model Tests', function() {
  describe('Module entry point', function() {
    it('should initialize module', function() {
      assert(feeds);
    });
  });
  describe('Feed data', function() {
    it('should return properly formatted twitter feed', function() {
      var result = feeds(testFeed);
      assert.ok(result);
    });
    it('should return two feeds from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.feeds.length, 2);
    });
    it('should not return three feeds', function() {
      var result = feeds(testFeed);
      assert.notEqual(result.feeds.length, 3);
    });
    it('should return correct accounts from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.feeds[0].twitter_account, 'PayByPhone');
      assert.equal(result.feeds[1].twitter_account, 'ComNpay');
    });
    it('should not return incorrect accounts from fake data', function() {
      var result = feeds(testFeed);
      assert.notEqual(result.feeds[0].twitter_account, 'TestCompany');
      assert.notEqual(result.feeds[1].twitter_account, 'SomeOtherCompany');
    });
    it('should return correct relative time from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.feeds[0].tweeted_on_relative, moment(new Date(testFeed.statuses[0].created_at)).fromNow());
      assert.equal(result.feeds[1].tweeted_on_relative, moment(new Date(testFeed.statuses[1].created_at)).fromNow());
    });
    it('should return incorrect relative time from fake data', function() {
      var result = feeds(testFeed);
      assert.notEqual(result.feeds[0].tweeted_on_relative, '14 hours ago');
      assert.notEqual(result.feeds[1].tweeted_on_relative, '4 minutes ago');
    });
    it('should return correct date and time from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.feeds[0].tweeted_on, 'October 4th 2015, 8:43:01 am');
      assert.equal(result.feeds[1].tweeted_on, 'October 4th 2015, 1:27:24 am');
    });
    it('should properly sorted in ascending order', function() {
      var result = feeds(testFeed);
      assert.isAbove(result.feeds[0].twitter_account, result.feeds[1].twitter_account, 'In this test case, the PayByPhone account is before the ComNpay account.');
    });
    it('should not be sorted in descending order', function() {
      var result = feeds(testFeed);
      assert.isBelow(result.feeds[1].twitter_account, result.feeds[0].twitter_account, 'In this test case, the PayByPhone account is before the ComNpay account.');
    });
    it('should have corresponding tweets per account', function() {
      var result = feeds(testFeed);
      assert.ok(result.feeds[0].tweet.indexOf('@PayByPhone \nBjr, Pouvez vous m\'indiquer') > -1);
      assert.ok(result.feeds[1].tweet.indexOf('@ComNpay @pay_by_phone @paylevenFR #Bitcoin') > -1);
    });
  });
  describe('Filter tweets by account', function() {
    it('should return two accounts with relevant aggregate information from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.tweets_by_account.PayByPhone, 1);
      assert.equal(result.tweets_by_account.ComNpay, 1);
    });
    it('should not return two accounts with relevant aggregate information from test data', function() {
      var result = feeds(testFeed);
      assert.notEqual(result.tweets_by_account.PayByPhone, 3);
      assert.notEqual(result.tweets_by_account.ComNpay, 5);
    });
    it('should not return an invalid account', function() {
      var result = feeds(testFeed);
      assert.isUndefined(result.tweets_by_account.SomeOtherCompany, 3);
    });
  });
  describe('Mentioned per account', function() {
    it('should return two accounts from test data', function() {
      var result = feeds(testFeed);
      assert.equal(result.mentions_by_account.length, 2);
    });
    it('should not return three accounts from test data', function() {
      var result = feeds(testFeed);
      assert.notEqual(result.mentions_by_account.length, 3);
    });
    it('should return appropriate aggregate data from selected account', function() {
      var result = feeds(testFeed);
      assert.equal(result.mentions_by_account[1].twitter_account, 'ComNpay');
      assert.equal(result.mentions_by_account[1].mentions, 3);
    });
  });
});
