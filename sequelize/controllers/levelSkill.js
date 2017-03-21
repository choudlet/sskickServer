const models = require('../models');


module.exports = {
  findLevelSkills(levelId) {
    levelId = Number(levelId);
    return models.Level.findAll({
      where: {
        id:levelId
      },
      include: [{
        model: models.Skill
      }]
    })
  },
};
