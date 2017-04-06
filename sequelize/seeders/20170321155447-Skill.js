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
    },
    {
      name: 'Half Turn',
      videoUrl: 'https://s3.amazonaws.com/sskick/Schoolyard+Skills+GREEN.mp4',
      description:'Foot',
      color:'Green',
      order:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jumping Header',
      videoUrl: 'https://s3.amazonaws.com/sskick/School+Yard+Skills+Blue.mp4',
      description:'Head',
      color:'Blue',
      order:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chest Half Turn',
      videoUrl: 'https://s3.amazonaws.com/sskick/Schoolyard+Skills+YELLOW.mp4',
      description:'Chest',
      color:'Yellow',
      order:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Inside Thigh Half Turn',
      videoUrl: 'https://s3.amazonaws.com/sskick/Schoolyard+Skills+ORANGE.mp4',
      description:'Thigh',
      color:'Orange',
      order:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Outside Foot Turn',
      videoUrl: 'https://s3.amazonaws.com/sskick/College+Level+Trainer+GREEN.mp4',
      description:'Foot',
      color:'Green',
      order:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Diving Header',
      videoUrl: 'https://s3.amazonaws.com/sskick/College+Level+BLUE.mp4',
      description:'Head',
      color:'Blue',
      order:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chest Volley',
      videoUrl: 'https://s3.amazonaws.com/sskick/College+Level+YELLOW.mp4',
      description:'Chest',
      color:'Yellow',
      order:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thigh Juggle Volley',
      videoUrl: 'https://s3.amazonaws.com/sskick/College+Level+ORANGE.mp4',
      description:'Thigh',
      color:'Orange',
      order:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Overhead Flick',
      videoUrl: 'https://s3.amazonaws.com/sskick/Pro+Debut+GREEN.mp4',
      description:'Foot',
      color:'Green',
      order:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Overhead Trap',
      videoUrl: 'https://s3.amazonaws.com/sskick/Pro+Debut+BLUE.mp4',
      description:'Head',
      color:'Blue',
      order:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chest Bike',
      videoUrl: 'https://s3.amazonaws.com/sskick/Pro+Debut+YELLOW.mp4',
      description:'Chest',
      color:'Yellow',
      order:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Opposite Hand Punch',
      videoUrl: 'https://s3.amazonaws.com/sskick/Pro+Debut+ORANGE.mp4',
      description:'Thigh',
      color:'Orange',
      order:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Skills', null, {});
  }
};
