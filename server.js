var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var models = require("./models");


var app = express();

var PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var route = require('./routes/route.js');
route.routes(app);

models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on: " + PORT)
  });
});