'use strict';

var TopicType = require('../config/topic-type');

function Utils() {

}

Utils.getTopicObj = function(topicArray){

    var topicObj = {};

    topicObj.fillBlack = topicArray.filter(function(topic) {
        return topic.type === TopicType.FILL_BLACK;
    });

    topicObj.singleChoice = topicArray.filter(function(topic) {
        return topic.type === TopicType.SINGLE_CHOICE;
    });

    topicObj.multipleChoice = topicArray.filter(function(topic) {
        return topic.type === TopicType.MULTIPLE_CHOICE;
    });

    topicObj.trueFalse = topicArray.filter(function(topic) {
        return topic.type === TopicType.TRUE_FALSE;
    });

    topicObj.shortAnswer = topicArray.filter(function(topic) {
        return topic.type === TopicType.SHORT_ANSWER;
    });

    return topicObj;
};

module.exports = Utils;