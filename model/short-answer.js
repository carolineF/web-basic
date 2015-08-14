'use strict';

var Topic = require('./topic');

function ShortAnswer(question, options, answer, score, name, input) {
  Topic.call(this, question, options, answer, score, name, input);
}

ShortAnswer.prototype  = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.mark = function() {
  return this.input === this.answer ? this.score : 0;
};

module.exports = ShortAnswer;