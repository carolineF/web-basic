'use strict';

var Topic = require('./topic');

function TrueFalse(question, options, answer, score, input) {
    Topic.call(this, 'trueFalse', question, options, answer, score, input);
}

TrueFalse.prototype  = Object.create(Topic.prototype);
TrueFalse.prototype.constructor = TrueFalse;

TrueFalse.prototype.mark = function() {

};

module.exports = TrueFalse;