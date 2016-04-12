var models = require('./models');

var newItinerary1 = {
  title: 'Adventure Time!',
  location: 'New York City',
  state: 'NY',
  country: 'USA',
  UserId: 1
};

models.Itinerary.create(newItinerary1)
.then(function(result){

});

var newItinerary2 = {
  title: 'Time for another adventure!',
  location: 'Jersey City',
  state: 'NJ',
  country: 'USA',
  UserId: 1
};


models.Itinerary.create(newItinerary2)
.then(function(result){

});

var newItinerary3 = {
  title: 'Beach time!',
  location: 'Miami',
  state: 'FL',
  country: 'USA',
  UserId: 2
};


models.Itinerary.create(newItinerary3)
.then(function(result){

});

var newItinerary4 = {
  title: 'Camping Trip',
  location: 'Catskill',
  state: 'NY',
  country: 'USA',
  UserId: 3
};


models.Itinerary.create(newItinerary4)
.then(function(result){

});

var newItinerary5 = {
  title: 'Surfing!',
  location: 'Juno',
  state: 'AK',
  country: 'USA',
  UserId: 4
};


models.Itinerary.create(newItinerary5)
.then(function(result){

});

var newItinerary6 = {
  title: 'Motorcycle Trip!',
  location: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  UserId: 5
};


models.Itinerary.create(newItinerary6)
.then(function(result){

});

var newItinerary7 = {
  title: 'Museums',
  location: 'New York City',
  state: 'NY',
  country: 'USA',
  UserId: 6
};


models.Itinerary.create(newItinerary7)
.then(function(result){

});

models.sequelize.sync();