'use strict';
module.exports = function(sequelize, DataTypes) {
  var TrainRecord = sequelize.define('TrainRecord', {
    user_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TrainRecord;
};
