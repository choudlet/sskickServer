'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Paths', [{
        name: 'Goalie',
        imageUrl: 'https://s3.amazonaws.com/sskick/GoalieImg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Player',
        imageUrl: 'https://s3.amazonaws.com/sskick/PlayerImg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Paths', null, {});
  }
};
