var express = require('express');
var router = express.Router();
const request = require('request');
const modelConnect = require('../sequelize/controllers')
/* GET home page. */
router.post('/', function(req, res, next) {
});

module.exports = router;

router.post('/FBLogAttempt', (req, res, next)=> {
  const accessToken = req.body.fbAccessData.accessToken
  request(`https://graph.facebook.com/v2.8/me?fields=id,name,gender,email,picture&access_token=${accessToken}`, (error,response,body)=>{
    const fbObject = JSON.parse(body);
    fbObject.pictureURL = fbObject.picture.data.url;
    fbObject.fbId = fbObject.id;
    fbObject.fullName = fbObject.name;
    delete fbObject.name
    delete fbObject.picture
    delete fbObject.id
    modelConnect.Profile.create(fbObject).then(finish=>{
      let completeInsertion = finish[0].dataValues;
      res.send(completeInsertion);
    })
  });

});

router.post('/test', (req,res,next)=> {
})

router.get('/path', (req,res,next)=> {
  modelConnect.Path.read().then(data=> {
    let records = data.map((element)=> {
      return element.dataValues
    });
    res.send(records)
  })
})

router.get('/path/:pathId', (req,res,next)=> {
  console.log(req.params.pathId);
  modelConnect.PathLevel.findPathLevels(req.params.pathId).then(data=> {
    console.log(data);
    res.json(data);
  });
});

router.get('/level/:levelId', (req,res,next)=> {
  console.log(req.params.levelId)
  modelConnect.LevelSkill.findLevelSkills(req.params.levelId).then(data=> {
    res.json(data);
  })
})
