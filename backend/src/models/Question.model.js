const mongoose = require('mongoose');

//Question Schema
const QuestionSchema = new mongoose.Schema(
    {
      question: { type: String, required: [ true, "Please Enter question"] , unique: true},
      options: [ 
        {
          option:{ type: String, required: [ true, "Please Enter option"] },
          optionCount:{ type: Number }
        }   
      ],
      answer : { type: String, required: [ true, "Please Enter answer"]},
      explanation: { type: String, required: [ true, "Please Enter explanation"] },
      answerdUser: [ 
        { 
         user:{ type: String },
         lastAnswer: { type: String}
        } 
      ]
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("Question", QuestionSchema);