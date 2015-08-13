'use strict';

function IndexController() {

}

IndexController.prototype.index = function(request, response) {
    response.render('index');
};

IndexController.prototype.submit = function(request, response) {
    console.log(request.body);
};

module.exports = IndexController;