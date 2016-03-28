
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    address: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Itinerary),
        Comment.belongsTo(models.User)
      }
    } 
  });

  return Comment;

};