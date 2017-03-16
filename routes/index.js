var express = require('express');
var router = express.Router();
const request = require('request');
/* GET home page. */
router.post('/', function(req, res, next) {
});

module.exports = router;

router.post('/FBLogAttempt', (req, res, next)=> {
  const accessToken = req.body.fbAccessData.accessToken
  request(`https://graph.facebook.com/v2.8/me?fields=id,name,gender,email,picture&access_token=${accessToken}`, (error,response,body)=>{
    const fbObject = JSON.parse(body);
    fbObject.picture = fbObject.picture.data.url
    console.log("COOLSTUFF",fbObject);
    res.send(fbObject);
  });

});
