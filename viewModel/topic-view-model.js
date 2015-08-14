'use strict';

function TopicViewModel(topic, score, userMsg) {
  this.topic = topic;
  this.score = score;
  this.userMsg = userMsg;
}

module.exports = TopicViewModel;
