'use strict';
module.exports = function(sequelize, DataTypes) {
  var Path = sequelize.define('Path', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Path;
};