var express = require('express');
var router = express.Router();
const request = require('request');
const modelConnect = require('../sequelize/controllers')


router.get('/:levelId', (req,res,next)=> {
  console.log(req.params.levelId)
  modelConnect.LevelSkill.findLevelSkills(req.params.levelId).then(data=> {
    res.json(data);
  })
})

module.exports = router;
