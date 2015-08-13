'use strict';

var Topic = require('./topic');

function FillBlack(question, options, answer, score, input) {
    Topic.call(this, 'fillBlack', question, options, answer, score, input);
}

FillBlack.prototype  = Object.create(Topic.prototype);
FillBlack.prototype.constructor = FillBlack;

FillBlack.prototype.mark = function() {
    var allAnswer = this.answer.split('、');
    var score = 0;

    for(var i = 0; i < this.input.length; i++){
        if(allAnswer.indexOf(this.input[i]) !== -1){
            score += this.score / allAnswer.length;
        }
    }

    return score;
};

module.exports = FillBlack;