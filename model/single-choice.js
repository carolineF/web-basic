'use strict';

var Topic = require('./topic');

function SingleChoice(question, options, answer, score, name, input) {
  Topic.call(this, question, options, answer, score, name, input);
}

SingleChoice.prototype = Object.create(Topic.prototype);
SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.mark = function() {
  return this.input === this.answer ? this.score : 0;
};

module.exports = SingleChoice;
