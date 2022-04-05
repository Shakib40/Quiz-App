const mongoose = require('mongoose');

//Question Schema
const QuestionSchema = new mongoose.Schema(
    {
      question: { type: String, required: [ true  , "Please Enter question"] },
      answer: [ { type: String, required: [ true  , "Please Enter ans"]}   ],
      explanation: { type: String, required: [ true  , "Please Enter explanation"] },
      answerdUser: [ { type: String, required: [ true  , "Please Enter answerdUser"] } ]
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("Question", QuestionSchema);