var models = require('../models');

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/public/views/index.html');
}


// ************** CREATE QUERIES **************

exports.signup = function(req, res, next){
  var newUser = req.body;
  models.User.create(newUser)
  .then(function(result){
    res.redirect('/?msg=New User Create!');
    }).catch(function(err){
      console.log(err);
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
  };


exports.addLocation = function(req, res, next){
  var newItinerary = req.body;
    models.Itinerary.create(newItinerary)
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
    models.Comment.create(newComment)
    .then(function(result){
      res.redirect('/?msg=Comment Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
};

exports.newActivity = function(req, res, next){
  var newActvitiy = req.body;
  //NOT SURE ON THIS  newToDO.itinerary.id = req.itinerary.id
    models.Activity.create(newActivitiy)
    .then(function(result){
      res.redirect('/?msg=Activity Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
};

// ************** READ QUERIES **************

//NEEDS TO BE CORRECTED FOR MYSQL
exports.getLogin = function(req, res, next) {
  console.log(req.user.username);
  console.log(req.user.id);
  models.User.findOne({
    username: req.user.username
  })
  .then(function(result){
    res.json(result);
  });
}

exports.allItineraries = function(req, res, next){
  models.Itinerary.findAll({})
  .then(function(result){
    res.json(result);
  });
};

exports.itineraryLocation = function(req,res, next){
  models.Itinerary.findAll({
    where:{
      location: req.body.location
    }
  })
  .then(function(result){
    res.json(result);
  });
};
//FIND ALL INTERARIES FOR USER - LOOK FOR ITINERARY FOREIGN ID KEY
exports.itineraryUser = function(req, res, next){
  models.Itinerary.findAll({
    where:{
      UserId: req.body.username
    }
  })
  .then(function(result){
    res.json(result)
  });
};

//FIND ALL ACTIVITES FOR AN ITINERARY - NEED HELP
exports.allActivites = function(req, res, next){
  models.activity.findAll({
    where:{
      ItineraryId: req.body//itinerary id
    }
  })
  .then(function(result){
    res.json(result)
  });
};

// ************** UPDATE QUERIES **************

exports.updateItinerary =  function(req,res, next){
  models.Itinerary.findOne({
    where:{
      id: req.itinerary.id
    }
  })
  .then(function(result){
    res.json(result)
  });
};

exports.updateComment = function(req,res, next){
  models.Itinerary.findOne({
    where:{
      id: req.comment.id
    }
  })
  .then(function(result){
    res.json(result)
  });
};
exports.updateActivity = function(req,res, next){
  models.Activity.findOne({
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

exports.destroyItinerary = function(req, res, next) {
  var itineraryId = req.params.id;
  Itinerary.destroy(
    {
      where: {
        id: itineraryId
      }
    }).then(function(result) {
    res.redirect('/?msg=Itinerary deleted.');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/?msg=' + err.message);
    });
};


exports.destroyComment = function(req, res, next) {
  var commentId = req.params.id;
  Comment.destroy(
    {
      where: {
        id: commentId
      }
    }).then(function(result) {
    res.redirect('/?msg=Comment deleted.');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/?msg=' + err.message);
    });
};


exports.destroyActivity = function(req, res, next) {
  var activityId = req.params.id;
  Comment.destroy(
    {
      where: {
        id: activityId
      }
    }).then(function(result) {
    res.redirect('/?msg=Activity deleted.');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/?msg=' + err.message);
    });
};

