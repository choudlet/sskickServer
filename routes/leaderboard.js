var express = require('express');
var router = express.Router();
var moment = require('moment');
const modelConnect = require('../sequelize/controllers')

router.post('/', (req,res,next)=>{
  console.log(req.body);
  let trainingRecord = req.body.data;
  trainingRecord.minutes = Number(trainingRecord.minutes)
  trainingRecord.seconds = Number(trainingRecord.seconds)
  let trainingTime = moment().minute(trainingRecord.minutes).second(trainingRecord.seconds).format('mm ss')
  completeRecord = {
    user_id:trainingRecord.user_id,
    skill_id:trainingRecord.drill_id,
    duration:trainingTime,
    completed:trainingRecord.completed
  }
  console.log(completeRecord);
  modelConnect.TrainRecord.createRecord(completeRecord).then(data=>{
    console.log(data);
  })
})

module.exports = router;
