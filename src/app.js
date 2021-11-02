/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Server file
*/
require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST")
  next();
});

app.use('/', indexRouter);
app.use(function (req, res) {
  res.send(404);
});

module.exports = app;
