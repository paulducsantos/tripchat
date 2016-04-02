"use strict";
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    address : {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Activity.belongsTo(models.Itinerary)
      }
    }
  }
  );

  return Activity;

};