var passport = require('passport');
var passportLocal = require('passport-local');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var controller = require('../controllers/controller.js');
var models = require('../models');
var FacebookStrategy = require('passport-facebook').Strategy
var config = require('../configuration/config')

module.exports.routes = function(app) {

  app.use(require('express-session')(
    {
      secret: 'eventsoccurinrealtime',
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: ( 4 * 60 * 60 * 1000 ) // 4 hours
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/views/index.html');
  });

  app.get('/loginInfo', controller.getLogin);
  app.get('/logout', controller.logout);
  // app.get('/allItineraries', controller.allItineraries);
  // app.get('/itineraryLocation:???????', controller.itineraryLocation);
  // app.get('/itineraryUser:???????', controller.itineraryUser);


  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/?msg=Login failed'
    })
  );
  app.post('/signup', controller.signup);
  // app.post('/newItinerary', controller.newItinerary);
  // app.post('/newComment', controller.newComment);
  // app.post('/newActvitiy', controller.newToDo);


  // app.put('/updateItinerary', controller.updateItinerary);
  // app.put('/updateComment', controller.updateComment);
  // app.put('/updateActivity', controller.updateActivity);

  // app.get('/destroyItinerary', controller.destroyItinerary);
  // app.get('/destroyComment', controller.destroyComment);
  // app.get('/destroyActivity', controller.destroyActivity);


  /*==========================================
    PASSPORTS
  ==========================================*/

  // ************** PASSPORT-LOCAL **************

  passport.serializeUser(function(user, done) {
    console.log('passport.serializeUser fired')
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    console.log('passport.deserializeUser fired')
    done(null, user);
  });
  // use method as callback when being autheticated
  passport.use(new passportLocal.Strategy(function(username, password, done) {
    console.log('passportLocal fired')
    // check the password in database
    models.User.findOne({
      where: {username: username }
    }).then(function(user) {
      console.log(user.id);
      // check the password against the hash
      if(user) {
        bcrypt.compare(password, user.password, function(err, userlogin) {
          if(userlogin) {
            // if password is valid -- authenticate the user with cookie
            done(null, { id: user.id, username: user.username });
          }
          else {
            done(null, null);
          }
        });
      }
    })
  })); // end passport-local

  // ************** PASSPORT-FACEBOOK **************

  /*config is our configuration variable.*/
  passport.use(new FacebookStrategy({
      clientID: config.facebook_api_key,
      clientSecret:config.facebook_api_secret ,
      callbackURL: config.callback_url
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        //Check whether the User exists or not using profile.id
        if(config.use_database==='true')
        {
           //Further code of Database.
        }
        return done(null, profile);
      });
    }
  ));

  app.get('/account', ensureAuthenticated, function(req, res){
    res.render('account', { user: req.user });
  });
  //Passport Router
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
         successRedirect : '/',
         failureRedirect: '/login'
    }),
    function(req, res) {
      res.redirect('/');
    });
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  } // end passport-facebook

}; // module.exports.routes
