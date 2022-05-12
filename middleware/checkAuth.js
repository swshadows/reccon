const express = require("express");
const session = require("express-session");

const checkNotLogged = (req, res, next) => {
  if (!req.session.logged) return res.status(400).json({ message: "Usuário não logado" });
  next();
};

const checkLogged = (req, res, next) => {
  if (req.session.logged) return res.status(400).json({ message: "Usuário já logado" });
  next();
};

module.exports.checkNotLogged = checkNotLogged;
module.exports.checkLogged = checkNotLogged;
