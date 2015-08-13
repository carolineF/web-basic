'use strict';

var TopicType = require('../config/topic-type');

function Utils() {

}

Utils.getTopics = function(topics, body) {

    var score = 0;

    for(var i = 0; i < topics.fillBlack.length; i++) {
        topics.fillBlack[i].input = body['fillBlack_'+ i];
        score += topics.fillBlack[i].mark();
    }

    for(i = 0; i < topics.singleChoice.length; i++) {
        topics.singleChoice[i].input = body['singleChoice_'+ i];
        score += topics.singleChoice[i].mark();
    }

    for(i = 0; i < topics.multipleChoice.length; i++) {
        topics.multipleChoice[i].input = body['multipleChoice_'+ i];
        score += topics.multipleChoice[i].mark();
    }

    for(i = 0; i < topics.trueFalse.length; i++) {
        topics.trueFalse[i].input = body['trueFalse_'+ i];
        score += topics.trueFalse[i].mark();
    }

    for(i = 0; i < topics.shortAnswer.length; i++) {
        topics.shortAnswer[i].input = body['shortAnswer_'+ i];
        score += topics.shortAnswer[i].mark();
    }

    topics.score = score;
    topics.className =body['class'];
    topics.id = body['id'];
    topics.name = body['name'];

    return topics;
};

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