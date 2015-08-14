'use strict';

function Topic(question, options, answer, score, name, input) {
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.score = score;
    this.name = name;
    this.input = input || '';
}

Topic.prototype.mark = function() {
  //to be overwrite
};

module.exports = Topic;
