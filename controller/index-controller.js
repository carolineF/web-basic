'use strict';

function IndexController() {

}

IndexController.prototype.index = function(request, response) {
    var topics = {
        fillBlack: [{question: 'UML的中文名称是：', count: 1, options: ['']},
            {question: '对象最突出的特征是：', count: 3, options: ['']}],
        singleChoice: [{question: 'UML与软件工程的关系是：', options: [
            'UML就是软件工程', 'UML参与到软件工程中软件开发过程中的几个阶段', 'UML与软件工程无关', 'UML是软件工程的一部分']},
            {question: 'Java语言支持：', options: ['单继承', '多继承', '单继承和多继承都支持', '单继承和多继承都不支持']}],
        multipleChoice: [{question: '用例的粒度分为以下哪三种。', options: [
            '概述级', '需求级', '用户目标级', '子功能级']},
            {question: '类图由以下哪三部分构成。', options: ['名称(Name)', '属性(Attribute)', '操作(Operation)',
            '方法(Function)']}],
        trueFalse: [{question: '用例图只是用于和客户端交流和沟通的，用于确定需求。', options: ['']},
            {question: '在状态图中，终止状态在一个状态图中允许有任意多个。', options: ['']}],
        shortAnswer: [{question: '简述什么是模型以及模型的表现形式', options:['']}]
    };

    response.render('index', topics);
};

IndexController.prototype.submit = function(request, response) {
    console.log(request.body);
};

module.exports = IndexController;