'use strict';

var Topic = require('./topic');

function ShortAnswer(question, options, answer, score, input) {
    Topic.call(this, 'shortAnswer', question, options, answer, score, input);
}

ShortAnswer.prototype  = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.mark = function() {

};

module.exports = ShortAnswer;