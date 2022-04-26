const express = require("express");
const router = express.Router();
const { User, validate, add } = require("../models/User");
const connection = require("../loaders/database");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  await connection.sync();

  const user = await User.findOne({ where: { email: req.body.emaillog } });
  if (!user) return res.send("Usuário não registrado");

  bcrypt.compare(req.body.passlog, user.password, (err, result) => {
    if (!result) return res.send("Senha incorreta");
    res.send("Logado com sucesso");
  });
});

router.post("/register", async (req, res) => {
  await connection.sync();
  if (!validate(req.body)) return res.send("Dados inválidos");
  const emailExists = await User.findOne({ where: { email: req.body.emailreg } });
  if (emailExists) return res.send("Usuário já registrado");

  add(req.body);
  res.send(`Adicionado com sucesso`);
});

module.exports = router;
