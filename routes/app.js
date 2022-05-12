const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
const { checkNotLogged } = require("../middleware/checkAuth");

router.get("/", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  res.render("anuncios.ejs", { address: addresses });
});

router.get("/create_ad", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  res.render("doacao.ejs", { address: addresses });
});

module.exports = router;
