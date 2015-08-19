'use strict';

function HomeControllerHelper() {

}

HomeControllerHelper.prototype.setInput = function(topics, body) {

  var topicNames = Object.keys(body);

  for (var i = 0; i < topicNames.length; i++) {
    var topicIndex;
    topics.forEach(function(topic, index) {
      if (topic.name === topicNames[i]) {
        topicIndex = index;
      }
    });
    if (topicIndex) {
      topics[topicIndex].input = body[topicNames[i]];
    }

  }

  return topics;
};

module.exports = HomeControllerHelper;
