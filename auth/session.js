const express = require("express");
const session = require("express-session");
module.exports = (app) => {
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    })
  );
};
