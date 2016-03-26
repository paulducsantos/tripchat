var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var app = express();

// Database - change to mysql
// var db = 'mongodb://localhost/tripChat';
// mongoose.connect(db);

var PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.static('public/assets'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var route = require('./routes/route.js');
route.routes(app);

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});