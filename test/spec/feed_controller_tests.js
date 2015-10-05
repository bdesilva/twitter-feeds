'use strict;'

var assert = require('chai').assert,
  sinon = require('sinon'),
  feedController = require('../../app/controllers/feed_controller'),
  feeds = require('../../app/models/feeds'),
  oauthBuilder = require('../../app/models/oauth_builder');

describe('Feed Controller Tests', function() {
  describe('Init function', function() {
    it('should initialize module', function() {
      assert(feedController);
      assert(feedController.init);
    });
    //TODO: Investigate better way to stub out oauth get request
    it.skip('should respond successfully when called', function(done) {
      var req, res, localSpy;

      req = {};
      res = {
        locals: {
          config: {
            twitter: {
              access_token: '',
              access_token_secret: ''
            }
          }
        }
      };

      sinon.createStubInstance(feeds);
      localSpy = sinon.spy(oauthBuilder, 'validate');

      feedController.init(req, res);
      assert.equal(localSpy.calledOnce, true);

      done();
    });
  });
});
