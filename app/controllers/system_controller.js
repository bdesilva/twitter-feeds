'use strict;'

var serviceCheck = function(req, res) {
  res.json({status: 'Service functioning'});
};

exports.init = function(req, res) {
  serviceCheck(req, res);
};
