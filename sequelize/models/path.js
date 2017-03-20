'use strict';
module.exports = function(sequelize, DataTypes) {
  var Path = sequelize.define('Path', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Path.belongsToMany(models.Level, {through: models.PathLevel, foreignKey:'pathID'});
      }
    }
  });
  return Path;
};
