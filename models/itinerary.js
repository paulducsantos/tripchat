
module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define('Itinerary', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true  
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        Itinerary.belongsTo(models.User),
        Itinerary.hasMany(models.Comment),
        Itinerary.hasMany(models.Activity)
      }
    }
  });

  return Itinerary;
}

