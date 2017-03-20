'use strict';
module.exports = function(sequelize, DataTypes) {
  var Level = sequelize.define('Level', {
    name: DataTypes.STRING,
    backgroundImageUrl: DataTypes.STRING,
    levelNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      Level.belongsToMany(models.Path, {through: models.PathLevel, foreignKey:'levelId'});
      }
    }
  });
  return Level;
};
