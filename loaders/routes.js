const express = require("express");

const indexRoute = require("../routes/index");
const formsRoute = require("../routes/forms");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", indexRoute);
  app.use("/forms", formsRoute);
};
