'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Skills', [{
      name: 'Inside Foot Trap',
      videoUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics+GREEN.mp4',
      description:'Foot',
      color:'Green',
      order:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Standing Header',
      videoUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics-+Blue.mp4',
      description:'Head',
      color:'Blue',
      order:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chest Trap',
      videoUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics-+Yellow.mp4',
      description:'Chest',
      color:'Yellow',
      order:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thigh Trap',
      videoUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics+ORANGE.mp4',
      description:'Chest',
      color:'Orange',
      order:4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Skills', null, {});
  }
};
