'use strict;'

var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');


module.exports = function(config, redis) {
  //Server config.
  var app = express();

  app.use(express.static(__dirname + '/public'));
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.urlencoded({
    'extended': 'true'
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));
  app.use(methodOverride());

  require('../app/routes/routes.js')(app, config, redis);

  return app;
};
