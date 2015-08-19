'use strict';

var dataType = require('../seed/topic-type');
var FillBlack = require('../model/fill-black');
var SingleChoice = require('../model/single-choice');
var MultipleChoice = require('../model/multiple-choice');
var TrueFalse = require('../model/true-false');
var ShortAnswer = require('../model/short-answer');

function TopicFactory() {

}

TopicFactory.prototype.getTopic = function(topicObj) {

  if (topicObj.type === dataType.FILL_BLACK) {

    return new FillBlack(topicObj.question, topicObj.options, topicObj.answer, topicObj.score, topicObj.name, topicObj.input);

  } else if (topicObj.type === dataType.SINGLE_CHOICE) {

    return new SingleChoice(topicObj.question, topicObj.options, topicObj.answer, topicObj.score, topicObj.name, topicObj.input);

  } else if (topicObj.type === dataType.MULTIPLE_CHOICE) {

    return new MultipleChoice(topicObj.question, topicObj.options, topicObj.answer, topicObj.score, topicObj.name, topicObj.input);

  } else if (topicObj.type === dataType.TRUE_FALSE) {

    return new TrueFalse(topicObj.question, topicObj.options, topicObj.answer, topicObj.score, topicObj.name, topicObj.input);

  } else if (topicObj.type === dataType.SHORT_ANSWER) {

    return new ShortAnswer(topicObj.question, topicObj.options, topicObj.answer, topicObj.score, topicObj.name, topicObj.input);

  }
};

module.exports = TopicFactory;
