'use strict';

var IndexController = require('../controller/index-controller');

module.exports = function(app) {

    var indexController = new IndexController();

    app.get('/', indexController.index);

    app.post('/', indexController.submit);
};