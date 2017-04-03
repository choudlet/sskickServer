var express = require('express');
var router = express.Router();
const modelConnect = require('../sequelize/controllers')

router.post('/', (req,res,next)=>{
  console.log(req.body);
})

module.exports = router;
