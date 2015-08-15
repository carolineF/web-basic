'use strict';

exports.setRoutes = function(app) {

    app.use('/', require('./router'));
};