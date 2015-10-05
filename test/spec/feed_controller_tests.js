'use strict;'

var assert = require('chai').assert,
  sinon = require('sinon'),
  feedController = require('../../app/controllers/feed_controller'),
  feeds = require('../../app/models/feeds'),
  validator = require('../../app/models/validation');

describe('Feed Controller Tests', function() {
  describe('Init function', function() {
    it('should initialize module', function() {
      assert(feedController);
      assert(feedController.init);
    });
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
      localSpy = sinon.spy(validator, 'validate');

      feedController.init(req, res);
      assert.equal(localSpy.calledOnce, true);

      done();
    });
  });
});
