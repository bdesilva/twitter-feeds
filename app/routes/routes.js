'use strict;'

module.exports = function(app) {
    var systemController = require('../controllers/system_controller');
    app.get('/', systemController.init);
};
