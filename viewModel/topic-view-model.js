'use strict';

var data = require('../config/data.json');
var TopicFactory = require('../factory/topic-factory');
var Utils = require('../utils/utils.js');

function TopicViewModel() {

}

TopicViewModel.prototype.getViewModel = function() {
    var topicArray = [];
    var topicFactory = new TopicFactory();
    var topics = data.topicArray;

    for(var i = 0; i <topics.length; i++) {
        topicArray.push(topicFactory.getTopicObj(topics[i]));
    }

    var topicObj = Utils.getTopicObj(topicArray);
    topicObj.score = '';
    topicObj.className = '';
    topicObj.id = '';
    topicObj.name = '';

    return topicObj;
};

module.exports = TopicViewModel;