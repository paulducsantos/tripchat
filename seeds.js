var models = require('./models');



//USERS
var newUser1 = {
  email: 'danpetro7@gmail.com',
  username: 'dpetro07',
  password: 'password',
  fname: 'Daniel',
  lname:'Petro'
};

models.Iternary.create(newUser1)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser2 = {
  email: 'Jeremy@gmail.com',
  username: 'Jeremy',
  password: 'password',
  fname: 'Jeremy',
  lname:'Miragliotta'
};

models.Iternary.create(newUser2)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser3 = {
  email: 'paul@gmail.com',
  username: 'paul',
  password: 'password',
  fname: 'Paul',
  lname:'Santos'
};

models.Iternary.create(newUser3)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser4 = {
  email: 'darryl@gmail.com',
  username: 'Darryl',
  password: 'password',
  fname: 'Darryl',
  lname:'Mendonez'
};

models.Iternary.create(newUser4)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser5 = {
  email: 'johndoe@gmail.com',
  username: 'johndoe',
  password: 'password',
  fname: 'John',
  lname:'Doe'
};

models.Iternary.create(newUser5)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newUser6 = {
  email: 'janedoe@gmail.com',
  username: 'janedoe',
  password: 'password',
  fname: 'Jane',
  lname:'Doe'
};

models.Iternary.create(newUser6)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser7 = {
  email: 'johnstockton@gmail.com',
  username: 'jstocks1',
  password: 'password',
  fname: 'John',
  lname:'Stockton'
};

models.Iternary.create(newUser7)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser8 = {
  email: 'ironmike@gmail.com',
  username: 'ironmike',
  password: 'password',
  fname: 'Mike',
  lname:'Tyson'
};

models.Iternary.create(newUser8)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser8 = {
  email: 'shamoons@gmail.com',
  username: 'shamoons',
  password: 'password',
  fname: 'Shamoon',
  lname:'Siddiqui'
};

models.Iternary.create(newUser8)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newUser9 = {
  email: 'sconaty@gmail.com',
  username: 'exampleuser9',
  password: 'password',
  fname: 'Sean',
  lname:'Conaty'
};

models.Iternary.create(newUser9)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newUser10 = {
  email: 'exampleuser10@gmail.com',
  username: 'exampleuser10',
  password: 'password',
  fname: 'Wolfgang',
  lname:'Hall'
};

models.Iternary.create(newUser10)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


//ACTIVITIES 
var newActivity1 = {
  name: 'Basketball',
  ItineraryId: '1'
};

models.Iternary.create(newActivity1)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newActivity1 = {
  name: 'Basketball',
  ItineraryId: 1
};

models.Iternary.create(newActivity1)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newActivity2 = {
  name: 'Skydiving',
  ItineraryId: 2
};

models.Iternary.create(newActivity2)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


var newActivity3 = {
  name: 'Surfing',
  ItineraryId: 3
};

models.Iternary.create(newActivity3)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});








//Itinerary


var newItinerary1 = {
  title: 'Adventure Time!',
  location: 'New York City, NY',
  UserId: 1
};


models.Iternary.create(newItinerary1)
.then(function(result){
    res.redirect('/?msg=New User Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary2 = {
  title: 'Time for another adventure!',
  location: 'Jersey City, NJ',
  UserId: 1
};


models.Iternary.create(newItinerary2)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary3 = {
  title: 'Beach time!',
  location: 'Miami, FL',
  UserId: 2
};


models.Iternary.create(newItinerary3)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary4 = {
  title: 'Camping Trip',
  location: 'Catskill, NY',
  UserId: 3
};


models.Iternary.create(newItinerary4)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary5 = {
  title: 'Surfing!',
  location: 'Juno, AK',
  UserId: 4
};


models.Iternary.create(newItinerary5)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary6 = {
  title: 'Motorcycle Trip!',
  location: 'Los Angeles, CA',
  UserId: 5
};


models.Iternary.create(newItinerary6)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});

var newItinerary7 = {
  title: 'Museums',
  location: 'New York City, NY',
  UserId: 6
};


models.Iternary.create(newItinerary7)
.then(function(result){
    res.redirect('/?msg=New Iternary Created!');
  }).catch(function(err){
    console.log(err);
    res.redirect('/msg=Something Went Wrong! Please Try Again');
});


models.sequelize.sync();