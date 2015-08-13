'use strict';

var Topic = require('./topic');

function FillBlack(question, options, answer, score, input) {
    Topic.call(this, 'fillBlack', question, options, answer, score, input);
}

FillBlack.prototype  = Object.create(Topic.prototype);
FillBlack.prototype.constructor = FillBlack;

FillBlack.prototype.mark = function() {

};

module.exports = FillBlack;