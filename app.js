'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./router/router.js');


var app = new express();

app.use(bodyParser());

app.set('views', './public/views');
app.set('view engine', 'ejs');


app.listen(8090, function() {
    console.log('Express server listening at 8090……');
});

router(app);