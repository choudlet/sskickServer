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
    },
    {
        levelId: 2,
        skillId:5,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 2,
        skillId:6,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 2,
        skillId:7,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 2,
        skillId:8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        levelId: 3,
        skillId:9,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 3,
        skillId:10,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 3,
        skillId:11,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 3,
        skillId:12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        levelId: 4,
        skillId:13,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 4,
        skillId:14,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 4,
        skillId:15,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        levelId: 4,
        skillId:16,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('SkillLevels', null, {});
  }
};
