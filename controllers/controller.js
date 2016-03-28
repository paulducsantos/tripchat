var models = require('../models');
var Activity = require('../models/activity.js');
var Itinerary = require('../models/itinerary.js');
var Comment = require('../models/comment.js');

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/public/views/index.html');
}

exports.getLogin = function(req, res, next) {
  console.log(req.user.username);
  console.log(req.user.id);

  models.User.findOne({
    username: req.user.username
  })
  .select('username')
  .exec()
  .then(function(user){
    res.json(user);
  });
}

exports.logout = function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}

exports.signup = function(req, res, next) {
  var user = new User(req.body);
  console.log("USER:\t" + user);
  user.save(function(err) {
    if(err) throw err;
  })
  .then(function(user) {
    console.log('saved!');
  });
}