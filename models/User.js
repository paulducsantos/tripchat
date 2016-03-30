var bcrypt            = require('bcryptjs');//REQUIRE FOR THE 

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [6,30]
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true  
      }
    },
    fname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true  
      }
    },
    lname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true  
      }
    },
  }, {
    hooks: {
      beforeCreate: function(input){
        input.password = bcrypt.hashSync(input.password, 10);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Comment),
        User.hasMany(models.Itinerary)
      }
    }
  });

  return User;
}