const express = require('express');
const cors = require("cors");
const managerController = require('./controllers/Question.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/questions", managerController);


module.exports = app;