var passport = require('passport');
var passportLocal = require('passport-local');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var controller = require('../controllers/controller.js');
var models = require('../models');

module.exports.routes = function(app) {

  app.use(require('express-session')(
    {
      secret: 'eventsoccurinreal-time',
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: ( 4 * 60 * 60 * 1000 ) // 4 hours
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', controller.home);

  app.get('/loginInfo', controller.getLogin);

  app.get('/logout', controller.logout);

  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/?msg=Login failed'
    })
  );

  app.post('/signup', controller.signup);

  // passport
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  // use method as callback when being autheticated
  passport.use(new passportLocal.Strategy(function(username, password, done) {
    // check the password in database
    models.User.findOne({
      username: username
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
  }))

}; // module.exports.routes