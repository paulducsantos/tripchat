"use strict";
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
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