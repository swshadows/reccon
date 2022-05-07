const express = require("express");
const router = express.Router();
const connection = require("../loaders/database");

router.post("/login", async (req, res) => {
  await connection.sync();
  // TODO
  res.send("Rota: /login");
});

router.post("/register", async (req, res) => {
  await connection.sync();
  // TODO
  res.send("Rota: /register");
});

module.exports = router;
