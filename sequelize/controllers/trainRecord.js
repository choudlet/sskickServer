const TrainRecord = require('../models').TrainRecord;

module.exports = {
  createRecord(newRecord) {
    return TrainRecord
    .create({
      user_id: newRecord.user_id,
      skill_id: newRecord.skill_id,
      duration: newRecord.duration,
      completed:newRecord.completed
    })
  },
  getSingleUserSkillTime(userId, skillId) {
    return TrainRecord
    .findAll({where:{user_id:userId, skill_id:skillId}})
  }
}
