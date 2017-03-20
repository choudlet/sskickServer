'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('PathLevels', [{
            pathId: 1,
            levelId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            pathId: 1,
            levelId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            pathId: 1,
            levelId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            pathId: 1,
            levelId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('PathLevels', null, {});

    }
};
