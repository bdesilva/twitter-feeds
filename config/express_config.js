'use strict;'

var path = require('path'),
  express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');


module.exports = function(config) {
  //Server config.
  var app = express();

  app.use(express.static('public'));
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.urlencoded({
    'extended': 'true'
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));
  app.use(methodOverride());

  require('../app/routes/routes.js')(app, config);

  return app;
};
