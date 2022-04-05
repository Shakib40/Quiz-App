const mongoose = require("mongoose");

require('dotenv').config()

module.exports = () => {
  return mongoose.connect('mongodb://localhost:27017/test');
};