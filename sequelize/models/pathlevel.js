'use strict';
module.exports = function(sequelize, DataTypes) {
  var PathLevel = sequelize.define('PathLevel', {
    pathId: DataTypes.STRING,
    levelId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PathLevel;
};