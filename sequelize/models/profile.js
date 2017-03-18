'use strict';

module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
   email: DataTypes.STRING,
   fullName: DataTypes.STRING,
   gender: DataTypes.STRING,
   fbId: DataTypes.STRING,
   pictureURL: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};
