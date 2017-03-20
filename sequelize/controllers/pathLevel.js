const models = require('../models');


module.exports = {
  findPathLevels(pathId) {
    pathId = Number(pathId);
    return models.Path.findAll({
      where: {
        id:pathId
      },
      include: [{
        model: models.Level
      }]
    })
  },
};
