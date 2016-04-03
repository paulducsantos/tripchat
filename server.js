var express = require('express');
var epilogue = require('epilogue');
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

epilogue.initialize({
    app: app,
    sequelize: models.sequelize
  });

var itineraryResource = epilogue.resource({
    model: models.Itinerary,
    endpoints: [
      '/api/itineraries',
      '/api/itineraries/:id'
    ],
    associations: true
  });

var activityResource =  epilogue.resource({
    model: models.Activity,
    endpoints: [
      '/api/activities',
      '/api/activities/:id'
    ],
    associations: true
  });

var commentResource =  epilogue.resource({
    model: models.Comment,
    endpoints: [
      '/api/comments',
      '/api/comments/:id'
    ],
    associations: true
  });

models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on: " + PORT)
  });
});
