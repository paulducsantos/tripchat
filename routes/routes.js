/*==========================================
  ADD MODULE REQUIRES
==========================================*/


/*==========================================
  ROUTES TO ACCESS DB
==========================================*/


// ************** CREATE **************

//ADD NEW ITINERARIES BY CITY
app.post('/addItinerary', function(req,res){
  var newItinerary = req.body;
    Itinerary.create(newItinerary)
    .then(function(result){
      res.redirect('/?msg=New Itinerary Create!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
});

//ADD NEW COMMENT
app.post('/newComment', function(req,res){
  var newComment = req.body;
  //NOT SURE ON THIS
  newComment.itinerary.id = req.itinerary.id
    Comment.create(newComment)
    .then(function(result){
      res.redirect('/?msg=Comment Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
});

//ADD NEW TODO

app.post('/newToDo', function(req,res){
  var newToDo = req.body;
  //NOT SURE ON THIS
  newToDO.itinerary.id = req.itinerary.id
    Comment.create(newComment)
    .then(function(result){
      res.redirect('/?msg=ToDo Added!');
    }).catch(function(err){
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
});


// ************** READ **************

//  DO WE NEED A RES.RENDER SINCE WE ARE USING ANGULAR?

//FIND ALL ITINERARIES
app.get('/allItineraries', function(req,res){
  Itinerary.findAll({})
  .then(function(result){
    res.json(result);
  });
});

//FIND ALL ITINERARIES BY CITY
app.get('/allItineraries:location', function(req,res){
  Itinerary.findAll({
    where:{
      location: req.body.location
    }
  })
  .then(function(result){
    res.json(result);
  });
});

//FIND ALL ITINERARIES BY SPECIFIC USER
app.get('/username', function(req,res){
  Itinerary.findAll({
    where:{
      username: req.body.username
    }
  })
  .then(function(result){
    res.json(result)
  });
});

// ************** UPDATE **************

app.put('updateItinerary', function(req,res, next){
  Itinerary.findOne({
    where:{
      id: req.itinerary.id
    }
  })
  .then(function(result){
    res.json(result)
  });
});
