var express = require('express');
var router = express.Router();
var moment = require('moment');
const modelConnect = require('../sequelize/controllers')

router.post('/', (req,res,next)=>{
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
  modelConnect.TrainRecord.createRecord(completeRecord).then(data=>{
    modelConnect.TrainRecord.getSingleUserSkillTime(trainingRecord.user_id, trainingRecord.drill_id).then(allRecords=>{
      console.log(allRecords);
    })
  })
})

module.exports = router;

function addTimes(timeArray) {
  let totalArr = [0,0]
  for (i=0; i<timeArray.length; i++) {
    let singleArr = timeArray[i].split(' ');
    totalArr[1] = totalArr[1] + Number(singleArr[1]);
    totalArr[0] = totalArr[0] + Number(singleArr[0]);
}
return formatTimes(totalArr);
}

function formatTimes(finalArr) {
  if (finalArr[1] % 60 != finalArr[1]) {
    finalArr[0] = finalArr[0] + Math.floor(finalArr[1] / 60);
    finalArr[1] = finalArr[1] % 60
  }
  if (finalArr[0] % 60 != finalArr[0]) {
    let shiftAmount = Math.floor(finalArr[0]/60)
    finalArr[0] = finalArr[0] % 60;
    finalArr.unshift(shiftAmount)
  }
  return finalArr;
}
