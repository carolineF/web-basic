'use strict';

var Topic = require('./topic');

function MultipleChoice(question, options, answer, score, name, input) {
    Topic.call(this, question, options, answer, score, name, input);
}

MultipleChoice.prototype  = Object.create(Topic.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.mark = function() {
    var allAnswer = this.answer.split('、');
    var input = this.input || '';

    if(input.length < allAnswer.length) {
        return 0;
    }

    for(var i = 0; i < input.length; i++){
        if(allAnswer.indexOf(input[i]) === -1) {
            return 0;
        }
    }

    return this.score;
};

module.exports = MultipleChoice;
