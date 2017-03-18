const Profile = require('../models').Profile;

module.exports = {
  create(data) {
    return Profile
      .findOrCreate({where:{email:data.email}, defaults:{
        email: data.email,
        fullName: data.fullName,
        gender: data.gender,
        fbId: data.fbId,
        pictureURL: data.pictureURL
      }});
  },
};
