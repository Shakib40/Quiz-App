const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/quiz' , {
    useNewUrlParser : true , 
    useUnifiedTopology : true
  }).then(() => 
  console.log("Connected Successfully....")
 ).catch(err => console.log("Error will connecting...." , err ))

};