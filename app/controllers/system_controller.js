'use strict;'

var serviceCheck = function(req, res) {
  res.send('Howdy World');
};

exports.init = function(req, res) {
  serviceCheck(req, res);
};
