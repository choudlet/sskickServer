'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('PathLevels', [{
            pathId: 1,
            levelId: 1
        }, {
            pathId: 1,
            levelId: 2
        }, {
            pathId: 1,
            levelId: 3
        }, {
            pathId: 1,
            levelId: 4
        }], {});

    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('PathLevels', null, {});

    }
};
