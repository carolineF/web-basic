'use strict';

var Topic = require('./topic');

function MultipleChoice(question, options, answer, score, input) {
    Topic.call(this, 'multipleChoice', question, options, answer, score, input);
}

MultipleChoice.prototype  = Object.create(Topic.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.mark = function() {

};

module.exports = MultipleChoice;