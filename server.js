'use strict;'

//Web server setup
var port = 3000;
var express = require('./config/express_config');
var app = express();

// Web server startup
app.listen(port);
console.log("Twitter Feeds client listening on localhost: " + port);
