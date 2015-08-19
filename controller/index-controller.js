'use strict';

var TopicViewModel = require('../viewModel/topic-view-model');
var HomeHelper = require('../helper/home-helper');
var HomeControllerHelper = require('../helper/home-controller-helper');
var Marker = require('../model/marker');

var DataBase = require('../model/database');

function IndexController() {

}

var database = new DataBase();
database.getTopics();

IndexController.prototype.index = function(request, response) {

  var homeHelper = new HomeHelper();
  var userMsg = {
    className: '',
    userId: '',
    userName: ''
  };

  var topicArray = homeHelper.getTopics(database.topic);
  var topic = homeHelper.getTopic(topicArray);

  response.render('index', new TopicViewModel(topic, '', userMsg));
};

IndexController.prototype.submit = function(request, response) {
  var homeHelper = new HomeHelper();

  var homeControllerHelper = new HomeControllerHelper();
  var topicArray = homeControllerHelper.setInput(database.topic, request.body);
  topicArray = homeHelper.getTopics(topicArray);

  var topic = homeHelper.getTopic(topicArray);
  var marker = new Marker();
  var score = marker.getScore(topicArray);

  var userMsg = {};
  userMsg.className = request.body.className;
  userMsg.userId = request.body.userId;
  userMsg.userName = request.body.userName;

  response.render('index', new TopicViewModel(topic, score, userMsg));
};

module.exports = IndexController;
