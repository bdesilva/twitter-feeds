'use strict;'

module.exports = function(app, config, redis) {
    var systemController = require('../controllers/system_controller'),
    feedController = require('../controllers/feed_controller');

    //Routes
    app.get('/', systemController.init);
    app.get('/feeds', function(req, res) {
      res.locals.config = config;
      res.locals.redis = redis;
      feedController.init(req, res);
    });
};
