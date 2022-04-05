const express = require("express");

const Question = require("../models/Question.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {

    const user = await Question.create(req.body);
    return res.status(201).send(user)

  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    // const question = await Question.find().lean().exec();
    console.log("Yes")
    // return res.send({ question });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;