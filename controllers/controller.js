var User = require('../models/user.js');

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/public/views/index.html');
}


// ************** CREATE QUERIES **************


//NEEDS TO BE UPDATES FROM MYSQL
exports.signup = function(req, res, next) {
  var user = new User(req.body);
  console.log("USER:\t" + user);
  User.save(function(err) {
    if(err) throw err;
  })
  .then(function(user) {
    console.log('saved!');
  });
};

exports.addLocation = function(req, res, next){
  var newItinerary = req.body;
    Itinerary.create(newItinerary)
    .then(function(result){
      res.redirect('/?msg=New Itinerary Create!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
};

exports.newComment = function(req, res, next){
  var newComment = req.body;
  //NOT SURE ON THIS
  newComment.itinerary.id = req.itinerary.id
    Comment.create(newComment)
    .then(function(result){
      res.redirect('/?msg=Comment Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
};

exports.newToDo = function(req, res, next){
  var newToDo = req.body;
  //NOT SURE ON THIS  newToDO.itinerary.id = req.itinerary.id
    Comment.create(newComment)
    .then(function(result){
      res.redirect('/?msg=ToDo Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
};

// ************** READ QUERIES **************

//NEEDS TO BE CORRECTED FOR MYSQL
exports.getLogin = function(req, res, next) {
  console.log(req.user.username);
  console.log(req.user.id);

  User.findOne({
    username: req.user.username
  })
  .select('username')
  .exec()
  .then(function(user){
    res.json(user);
  });
}


exports.allItineraries = function(req, res, next){
  Itinerary.findAll({})
  .then(function(result){
    res.json(result);
  });
};

exports.itineraryLocation = function(req,res, next){
  Itinerary.findAll({
    where:{
      location: req.body.location
    }
  })
  .then(function(result){
    res.json(result);
  });
};

exports.itineraryUser = function(req, res, next){
  Itinerary.findAll({
    where:{
      username: req.body.username
    }
  })
  .then(function(result){
    res.json(result)
  });
};

// ************** UPDATE QUERIES **************

exports.updateItinerary =  function(req,res, next){
  Itinerary.findOne({
    where:{
      id: req.itinerary.id
    }
  })
  .then(function(result){
    res.json(result)
  });
};

exports.updateComment = function(req,res, next){
  Itinerary.findOne({
    where:{
      id: req.comment.id
    }
  })
  .then(function(result){
    res.json(result)
  });
};
exports.updateActivity = function(req,res, next){
  Itinerary.findOne({
    where:{
      id: req.activity.id
    }
  })
  .then(function(result){
    res.json(result)
  });
};

// ************** DELETE QUERIES **************

exports.logout = function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}

