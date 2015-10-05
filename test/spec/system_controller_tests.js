'use strict;'

var assert = require('chai').assert,
  sinon = require('sinon'),
  systemController = require('../../app/controllers/system_controller');

describe('System Controller Tests', function() {
  describe('Init function', function() {
    it('should initialize module', function() {
      assert(systemController);
      assert(systemController.init);
    });
    it("should respond successfully when called", function() {
        var req,res,spy;

        req = res = {};
        spy = res.json = sinon.spy();

        systemController.init(req, res);
        assert.equal(spy.calledOnce, true);
      });
  });
});
