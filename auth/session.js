const dotenv = require("dotenv").config();
const express = require("express");
const session = require("express-session");
module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
};
