'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SkillLevels', [{
        levelId: 1,
        skillId:1,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 1,
        skillId:2,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 1,
        skillId:3,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 1,
        skillId:4,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('SkillLevels', null, {});
  }
};
