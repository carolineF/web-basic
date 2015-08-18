'use strict';

function Marker() {

}

Marker.prototype.getScore = function(topics) {
    var score = 0;
    
    topics.forEach(function(topic){
       score += topic.mark();
    });

    return score;
};

module.exports = Marker;
