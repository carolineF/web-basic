'use strict';

function Topic(type, question, options, answer, score, input) {
    this.type = type;
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.score = score;
    this.input = input || '';
}

Topic.prototype.mark = function() {
  //to be overwrite
};

module.exports = Topic;
