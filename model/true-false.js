'use strict';

var Topic = require('./topic');

function TrueFalse(question, options, answer, score, name, input) {
  Topic.call(this, question, options, answer, score, name, input);
}

TrueFalse.prototype  = Object.create(Topic.prototype);
TrueFalse.prototype.constructor = TrueFalse;

TrueFalse.prototype.mark = function() {
  return this.input === this.answer ? this.score : 0;
};

module.exports = TrueFalse;
