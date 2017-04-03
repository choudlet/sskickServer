var express = require('express');
var router = express.Router();
var moment = require('moment');
const modelConnect = require('../sequelize/controllers')

router.post('/', (req,res,next)=>{
  console.log(req.body);
  let trainingRecord = req.body.data;
  trainingRecord.minutes = Number(trainingRecord.minutes)
  trainingRecord.seconds = Number(trainingRecord.seconds)
  let trainingTime = moment().minute(trainingRecord.minutes).second(trainingRecord.seconds)
  
})

module.exports = router;
