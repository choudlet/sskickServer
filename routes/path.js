var express = require('express');
var router = express.Router();
const request = require('request');
const modelConnect = require('../sequelize/controllers')


router.get('/', (req,res,next)=> {
  modelConnect.Path.read().then(data=> {
    let records = data.map((element)=> {
      return element.dataValues
    });
    res.send(records)
  })
})

router.get('/:pathId', (req,res,next)=> {
  console.log(req.params.pathId);
  modelConnect.PathLevel.findPathLevels(req.params.pathId).then(data=> {
    console.log(data);
    res.json(data);
  });
});
