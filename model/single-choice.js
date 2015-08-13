'use strict';

var Topic = require('./topic');

function SingleChoice(question, options, answer, score, input) {
    Topic.call(this, 'singleChoice', question, options, answer, score, input);
}

SingleChoice.prototype  = Object.create(Topic.prototype);
SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.mark = function() {

};

module.exports = SingleChoice;