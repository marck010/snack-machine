var express = require('express');
var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(require("mongoose"));
var bodyParser = require('body-parser');
var routeSnackMachine = require('./routes/snack-machine');
var logger = require('morgan');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ApiKeyPersona, SessionKey");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    if (mongoose.connection.readyState == 3 || mongoose.connection.readyState == 0) {

        var server = process.env.SERVER_DB || 'ds034807.mlab.com:34807';
        var user = process.env.USER_DB || 'marck010';
        var password = process.env.PASS_DB || '1232017';

        console.log(server);
        console.log(user);
        console.log(password);

        mongoose.connect('mongodb://' + user + ":" + password + '@' + server + '/snack-machine', function(error) {
            if (error) {
                next(error)
                console.log(error);
                return;
            }
            next();
            console.log('Conected mongodb');

        });
        return;
    }
    next();
})
app.use('/', routeSnackMachine);

module.exports = app;