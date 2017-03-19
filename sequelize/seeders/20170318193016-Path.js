'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Paths', [{
        name: 'Goalie',
        imageUrl: 'https://s3.amazonaws.com/sskick/goalieImg.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Player',
        imageUrl: 'https://s3.amazonaws.com/sskick/playerImg.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Paths', null, {});
  }
};
