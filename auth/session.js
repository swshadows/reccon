const dotenv = require("dotenv").config();
const express = require("express");
const session = require("cookie-session");
module.exports = (app) => {
  app.use(
    session({
      name: "session",
      secret: process.env.SESSION_SECRET,
      maxAge: 72 * 60 * 60 * 1000, // 3 dias
    })
  );
};
