'use strict;'

//Web server setup
var env = process.env.NODE_ENV || 'development',
  config = require('./config/env/' + env + '-env'),
  express = require('./config/express_config'),
  app = express(config);

// Web server startup
app.listen(config.web.port);
console.log("Twitter Feeds client listening on localhost: " + config.web.port);
