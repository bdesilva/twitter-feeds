'use strict;'

module.exports = function(app) {
    var systemController = require('../controllers/system_controller');

    //Routes
    app.get('/system', systemController.init);
};
