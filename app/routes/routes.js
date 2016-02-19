'use strict;'

module.exports = function(app, config) {
  var path = require('path'),
    systemController = require('../controllers/system_controller'),
    feedController = require('../controllers/feed_controller');

  //Routes
  app.get('/api/status', systemController.init);

  app.get('/api/feeds', function(req, res) {
    res.locals.config = config;
    feedController.feed(req, res);
  });

  app.get('/*', function(req, res) {
    res.sendfile(path.resolve('public/index.html'));
  });
};
