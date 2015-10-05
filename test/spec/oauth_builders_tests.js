'use strict;'

var assert = require('chai').assert,
  moment = require('moment'),
  oauthBuilder = require('../../app/models/oauth_builder');

var config = {
  twitter: {
    consumer_key: 'some_key',
      consumer_secret: 'some_secret'
  }
};

describe('OAuth Builder model Tests', function() {
  describe('Module entry point', function() {
    it('should initialize module', function() {
      assert(oauthBuilder);
    });
  });
  describe('Module entry point', function() {
    it('should contain appropriate keys in oauth object', function() {
      var result = oauthBuilder.build(config);
      assert.equal(result._consumerKey, 'some_key');
      assert.equal(result._consumerSecret, 'some_secret');
    });
    it('should not contain invalid keys in oauth object', function() {
      var result = oauthBuilder.build(config);
      assert.notEqual(result._consumerKey, 'another_key');
      assert.notEqual(result._consumerSecret, 'another_secret');
    });
  });
});
