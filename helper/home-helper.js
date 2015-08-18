'use strict';

var data = require('../seed/data');
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

HomeHelper.prototype.getData = function() {

  var connection = mysql.createConnection(conData);

  connection.connect();
  connection.query('select topic.*, options.option_name FROM topic LEFT JOIN options ON options.topic_id = topic.id;',
    function(err, result){
      topics = result;
      console.log(result);
      addOption(result);
      console.log(result);
   });

  connection.end();

}

function findTopic(topics, id){
  topics.forEach(function(topic, index){
    if(topic.id === id){
      return topic;
    }
  });
}

function addOption(topics){
  for(var i = 0; i < topics.length; i++) {
    var topic = findTopic(topics.slice(0, i-1), topics[i].id);
    if(topic){
      if(typeof(topic.option_name) === 'string'){
        topic.option_name = [].push(topic.option_name);
      }
      topic.option_name.push(topics[i].option_name);
      topics.splice(i, 1);
    }
  }
}

HomeHelper.prototype.getTopicArray = function() {
    var topicArray = [];
    var topicFactory = new TopicFactory();
    var topics = data.topicArray;

    for(var i = 0; i <topics.length; i++) {
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
