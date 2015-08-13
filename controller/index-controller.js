'use strict';

var data = require('../config/data.json');
var TopicFactory = require('../factory/topic-factory');
var Utils = require('../utils/utils.js');

function IndexController() {

}

IndexController.prototype.index = function(request, response) {
    var topicArray = [];
    var topicFactory = new TopicFactory();
    var topics = data.topicArray;

    for(var i = 0; i <topics.length; i++) {
        topicArray.push(topicFactory.getTopicObj(topics[i]));
    }

    var topics = Utils.getTopicObj(topicArray);
    console.log(topics);

    response.render('index', topics);
};

IndexController.prototype.submit = function(request, response) {
    console.log(request.body);
};

module.exports = IndexController;