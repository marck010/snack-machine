var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var routerSnackMachine = require('./src/routes/routes-snack-machine');
var DatabaseConnect = require("./database");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

DatabaseConnect.connect();


app.use('/', routerSnackMachine);

app.use((error, req, res, next) => {
    if (error) {
        res.json(error.message);
    }
});


module.exports = app;