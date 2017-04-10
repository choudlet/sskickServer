'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Levels', [{
      name: 'BACKYARD BASICS',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics.jpg',
      levelNumber:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'SCHOOLYARD SKILLS',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Schoolyard+Skills.jpg',
      levelNumber:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'COLLEGE TOURNAMENT',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/College+level+training.jpg',
      levelNumber:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'PRO DEBUT',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Pro+Level.jpg',
      levelNumber:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'BACKYARD BASICS',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Backyard+Basics.jpg',
      levelNumber:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'SCHOOLYARD SKILLS',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Schoolyard+Skills.jpg',
      levelNumber:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'COLLEGE TOURNAMENT',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/College+level+training.jpg',
      levelNumber:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'PRO DEBUT',
      backgroundImageUrl: 'https://s3.amazonaws.com/sskick/Pro+Level.jpg',
      levelNumber:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Levels', null, {});
  }
};
