var mysql = require('mysql');
var conData = require('../config/database');

function DataBase(){
  this.topic = null;
}

DataBase.prototype.getTopics = function() {
  var connection = mysql.createConnection(conData);
  var _this = this;

  connection.connect();
  connection.query(' SELECT topic.*,GROUP_CONCAT(option_name) AS options FROM topic,options WHERE topic.id = options.topic_id group by topic.id;',
    function(err, result){
      _this.topic = result;
   });

  connection.end();
}

module.exports = DataBase;
