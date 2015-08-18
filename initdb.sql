DROP DATABASE IF EXISTS TWWebBasic;

CREATE DATABASE TWWebBasic;
ALTER DATABASE TWWebBasic CHARACTER SET UTF8;
USE TWWebBasic;

CREATE TABLE IF NOT EXISTS topic(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  type VARCHAR(15) NOT NULL,
  question VARCHAR(200) NOT NULL,
  answer VARCHAR(200) NOT NULL,
  score INT NOT NULL,
  name VARCHAR(20) NOT NULL
 );

CREATE TABLE IF NOT EXISTS options(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  option_name VARCHAR(200) NOT NULL,
  topic_id INT NOT NULL
);

ALTER TABLE options ADD CONSTRAINT FK_Reference_topic FOREIGN KEY (topic_id)
  REFERENCES topic (id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO topic (type, question, answer, score, name)VALUES('fillBlack', 'UML的中文名称是：', '统一建模语言', 5, 'fillBlack_0');
INSERT INTO topic (type, question, answer, score, name)VALUES('fillBlack', '对象最突出的特征是：', '封装性、继承性、多态性', 15, 'fillBlack_1');
INSERT INTO topic (type, question, answer, score, name)VALUES('singleChoice', 'UML与软件工程的关系是：', 'B', 10, 'singleChoice_0');
INSERT INTO topic (type, question, answer, score, name)VALUES('singleChoice', 'Java语言支持：', 'A', 10, 'singleChoice_1');
INSERT INTO topic (type, question, answer, score, name)VALUES('multipleChoice', '用例的粒度分为一下哪三种。', 'A、B、D', 10,
   'multipleChoice_0');
INSERT INTO topic (type, question, answer, score, name)VALUES('multipleChoice', '类图由以下哪三部分构成。', 'A、B、C', 10,
  'multipleChoice_1');
INSERT INTO topic (type, question, answer, score, name)VALUES('trueFalse', '用例图只是用于和客户交流和沟通的，用于确定需求。',
  'X', 10, 'trueFalse_0');
INSERT INTO topic (type, question, answer, score, name)VALUES('trueFalse', '在状态图中，终止状态在一个状态图中与允许有任意多个。',
   'V', 10, 'trueFalse_1');
INSERT INTO topic (type, question, answer, score, name)VALUES('shortAnswer', '简述什么是模型以及模型的表现形式？', '模型是对现实世界的简化和抽象，
  模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者说是一种数学表达式。',
   20, 'shortAnswer_0');

INSERT INTO options(option_name, topic_id)VALUES('(A)UML就是软件工程',3);
INSERT INTO options(option_name, topic_id)VALUES('(B)UML参与到软件工程中软件开发过程中的几个阶段',3);
INSERT INTO options(option_name, topic_id)VALUES('(C)UML与软件工程无关',3);
INSERT INTO options(option_name, topic_id)VALUES('(D)UML是软件工程的一部分',3);

INSERT INTO options(option_name, topic_id)VALUES('(A)单继承',4);
INSERT INTO options(option_name, topic_id)VALUES('(B)多继承',4);
INSERT INTO options(option_name, topic_id)VALUES('(C)单继承和多继承都支持',4);
INSERT INTO options(option_name, topic_id)VALUES('(D)单继承和多继承都不支持',4);

INSERT INTO options(option_name, topic_id)VALUES('(A)概述级',5);
INSERT INTO options(option_name, topic_id)VALUES('(B)需求级',5);
INSERT INTO options(option_name, topic_id)VALUES('(C)用户目标级',5);
INSERT INTO options(option_name, topic_id)VALUES('(D)子功能级',5);

INSERT INTO options(option_name, topic_id)VALUES('(A)名称(Name)',6);
INSERT INTO options(option_name, topic_id)VALUES('(B)属性(Attribute)',6);
INSERT INTO options(option_name, topic_id)VALUES('(C)操作(Operation)',6);
INSERT INTO options(option_name, topic_id)VALUES('(D)方法(Function)',6);
