'use strict';

var TopicFactory = require('../factory/topic-factory');
var FillBlack = require('../model/fill-black');
var SingleChoice = require('../model/single-choice');
var MultipleChoice = require('../model/multiple-choice');
var TrueFalse = require('../model/true-false');
var ShortAnswer = require('../model/short-answer');

var mysql = require('mysql');
var conData = require('../config/database');

function HomeHelper() {

}

HomeHelper.prototype.getTopics = function(topics) {
  var topicArray = [];
  var topicFactory = new TopicFactory();
  for (var i = 0; i < topics.length; i++) {
    topicArray.push(topicFactory.getTopic(topics[i]));
  }

  return topicArray;
};

HomeHelper.prototype.getTopic = function(topicArray) {
  var topic = {};

  topic.fillBlack = topicArray.filter(function(topic) {
    return topic instanceof FillBlack;
  });

  topic.singleChoice = topicArray.filter(function(topic) {
    return topic instanceof SingleChoice;
  });

  topic.multipleChoice = topicArray.filter(function(topic) {
    return topic instanceof MultipleChoice;
  });

  topic.trueFalse = topicArray.filter(function(topic) {
    return topic instanceof TrueFalse;
  });

  topic.shortAnswer = topicArray.filter(function(topic) {
    return topic instanceof ShortAnswer;
  });

  return topic;
};

module.exports = HomeHelper;
