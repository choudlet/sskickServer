var express = require('express');
var router = express.Router();
const request = require('request');
const bcrypt = require('bcrypt')
const modelConnect = require('../sequelize/controllers')
    /* GET home page. */
router.post('/', function(req, res, next) {});

module.exports = router;

router.post('/FBLogAttempt', (req, res, next) => {
    const accessToken = req.body.fbAccessData.accessToken
    request(`https://graph.facebook.com/v2.8/me?fields=id,name,gender,email,picture&access_token=${accessToken}`, (error, response, body) => {
        const fbObject = JSON.parse(body);
        fbObject.pictureURL = fbObject.picture.data.url;
        fbObject.fbId = fbObject.id;
        delete fbObject.picture
        delete fbObject.id
        fbObject.name = fbObject.name.split(' ')[0]
        modelConnect.Profile.createFB(fbObject).then(finish => {
            let completeInsertion = finish[0].dataValues;
            res.send(completeInsertion);
        })
    });

});

router.post('/emailCreateAttempt', (req, res, next) => {
    console.log(req.body)
    bcrypt.hash(req.body.userFormData.password, 10).then(function(hash) {
        let userObj = {
            email: req.body.userFormData.email,
            password: hash,
            name: req.body.userFormData.displayName
        }
        console.log(userObj)
        modelConnect.Profile.createEmail(userObj).then(result => {
            let userData = result[0].dataValues;
            res.send({
                email: userData.email,
                password: userData.password,
                name: userData.name
            })
        })
    });
})

router.post('/emailLogAttempt', (req,res,next)=> {
  let user = req.body.userData
  console.log(user);
  modelConnect.Profile.findUser(user.email).then(result=>{
    if(!result) {
      res.status(404);
      res.json({message:'Incorrect Email Submission'})
    } else {
      let userInDB = result.dataValues
      bcrypt.compare(user.password, userInDB.password , function(err, result) {
        if(result) {
          res.status(200);
          delete userInDB.password
          res.json({
            message: 'Successful Login',
            user: userInDB
          })
        } else {
          res.status(404);
          res.json({message: 'Incorrect Password'})
        }
});
    }
  })
})
