const express = require("express");

const indexRoute = require("./index");
const formsRoute = require("./forms");
const appRoute = require("./app");
const meRoute = require("./me");
const apiRoute = require("./api");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", indexRoute);
  app.use("/forms", formsRoute);
  app.use("/app", appRoute);
  app.use("/me", meRoute);
  app.use("/api", apiRoute);
};
