'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./router/route');

var app = new express();

app.use(bodyParser());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

route.setRoutes(app);

app.listen(8090, function() {
    console.log('Express server listening at 8090……');
});

