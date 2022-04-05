const express = require("express");

const Question = require("../models/Question.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.status(201).send(question)
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const questions = await Question.find().lean().exec();
    return res.send({ questions });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;