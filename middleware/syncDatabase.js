const express = require("express");
const connection = require("../loaders/database");

module.exports = async (req, res, next) => {
  await connection.sync({ alter: true });
  next();
};
