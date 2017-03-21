'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Skill.belongsToMany(models.Level, {through: models.SkillLevel, foreignKey:'skillId'});
      }
    }
  });
  return Skill;
};
