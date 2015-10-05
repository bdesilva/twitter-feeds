'use strict;'

//Web server setup
var env = process.env.NODE_ENV || 'development',
  config = require('./config/env/' + env + '-env'),
  express = require('./config/express_config'),
  redis = require('./config/redis_config')(config),
  app = express(config, redis);

var path = require('path');

//Redis startup
redis.on('connect', function() {
  console.log('Redis client connected on ' + config.redis.host + ':' + config.redis.port);
});

// Web server startup
app.listen(config.web.port);

console.log("Twitter Feeds client listening on localhost: " + config.web.port);
