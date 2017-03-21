'use strict';
module.exports = function(sequelize, DataTypes) {
  var SkillLevel = sequelize.define('SkillLevel', {
    skillId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SkillLevel;
};