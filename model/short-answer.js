'use strict';

var Topic = require('./topic');

function ShortAnswer(question, options, answer, score, input) {
    Topic.call(this, 'shortAnswer', question, options, answer, score, input);
}

ShortAnswer.prototype  = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.mark = function() {

    if(this.input === this.answer) {
        return this.score;
    }

    return 0;
};

module.exports = ShortAnswer;