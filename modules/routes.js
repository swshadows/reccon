const express = require("express");

const indexRoute = require("../routes/index");
const formsRoute = require("../routes/forms");
const appRoute = require("../routes/app");
const meRoute = require("../routes/me");
const apiRoute = require("../routes/api");
const staticRoute = require("../routes/static");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", indexRoute);
  app.use("/forms", formsRoute);
  app.use("/app", appRoute);
  app.use("/me", meRoute);
  app.use("/api", apiRoute);
  app.use("/static", staticRoute);
};
