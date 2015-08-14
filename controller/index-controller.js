'use strict';

var TopicViewModel = require('../viewModel/topic-view-model');
var HomeHelper = require('../helper/home-helper');
var HomeControllerHelper = require('../helper/home-controller-helper');
var Marker = require('../model/marker');

function IndexController() {

}

IndexController.prototype.index = function(request, response) {
  var homeHelper = new HomeHelper();

  var topicArray = homeHelper.getTopicArray();

  var topic = homeHelper.getTopic(topicArray);
  var userMsg = {className: '', userId: '', userName: ''};

  response.render('index', new TopicViewModel(topic, '', userMsg));
};

IndexController.prototype.submit = function(request, response) {
  var homeHelper = new HomeHelper();

  var topicArray = homeHelper.getTopicArray();

  var homeControllerHelper = new HomeControllerHelper();
  topicArray = homeControllerHelper.setInput(topicArray, request.body);

  var marker = new Marker();
  var score = marker.getScore(topicArray);

  var topic = homeHelper.getTopic(topicArray);

  var userMsg = {};
  userMsg.className = request.body.className;
  userMsg.userId = request.body.userId;
  userMsg.userName = request.body.userName;

  response.render('index', new TopicViewModel(topic, score, userMsg));
};

module.exports = IndexController;
