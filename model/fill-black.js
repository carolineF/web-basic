'use strict';

var Topic = require('./topic');

function FillBlack(question, options, answer, score, name, input) {
  Topic.call(this, question, options, answer, score, name, input);
}

FillBlack.prototype = Object.create(Topic.prototype);
FillBlack.prototype.constructor = FillBlack;

FillBlack.prototype.mark = function() {
  var allAnswer = this.answer.split('、');
  var score = 0;

  for (var i = 0; i < this.input.length; i++) {
    var isRepeat = this.input.slice(i + 1, this.input.length).indexOf(this.input[i]) !== -1;

    if (!isRepeat && allAnswer.indexOf(this.input[i]) !== -1) {
      score += this.score / allAnswer.length;
    }
  }

  return score;
};

module.exports = FillBlack;
