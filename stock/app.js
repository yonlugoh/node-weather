var express = require('express');
var path = require('path');

var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

module.exports = app;
