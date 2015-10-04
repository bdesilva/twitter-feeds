'use strict;'

module.exports = function(app, config) {
    var systemController = require('../controllers/system_controller'),
    feedController = require('../controllers/feed_controller');

    //Routes
    app.get('/', systemController.init);
    app.get('/feeds', function(req, res) {
      res.locals.config = config;
      feedController.init(req, res);
    });
};
