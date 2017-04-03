const Profile = require('../models').Profile;

module.exports = {
  createFB(data) {
    console.log(data);
    return Profile
      .findOrCreate({where:{email:data.email}, defaults:{
        email: data.email,
        name: data.name,
        gender: data.gender,
        fbId: data.fbId,
        pictureURL: data.pictureURL
      }})
  },
  createEmail(emailData) {
    console.log(emailData)
    return Profile
    .findOrCreate({where:{email:emailData.email}, defaults:{
      email:emailData.email,
      name: emailData.name,
      password:emailData.password
    }})
  }
};
