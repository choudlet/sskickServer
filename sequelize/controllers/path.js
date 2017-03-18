const Path = require('../models').Path;

module.exports = {
  read() {
    return Path.findAll()
  },
};
