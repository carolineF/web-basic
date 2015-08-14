'use strict';

var TopicViewModel = require('../viewModel/topic-view-model');
var Utils = require('../utils/utils');

function IndexController() {

}

IndexController.prototype.index = function(request, response) {
    var topicViewModel = new TopicViewModel();

    response.render('index', topicViewModel.getViewModel());
};

IndexController.prototype.submit = function(request, response) {
    var topicViewModel = new TopicViewModel();

    var topics = topicViewModel.getViewModel();

   var topic = Utils.getTopics(topics, request.body);

    response.render('index', topic);
};

module.exports = IndexController;
