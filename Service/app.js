var express = require('express');
var bodyParser = require('body-parser');
var routeSnackMachine = require('./src/routes/snack-machine');
var DatabaseConnect = require("./database");
var logger = require('morgan');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

DatabaseConnect.connect();

app.use(function (req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ApiKeyPersona, SessionKey");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
})

app.use('/', routeSnackMachine);

module.exports = app;