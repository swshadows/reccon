const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
const { checkNotLogged } = require("../middleware/checkAuth");

router.get("/", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  if (req.session.warning) {
    const warning = req.session.warning;
    req.session.warning = null;
    return res.render("app.ejs", { address: addresses, warning: warning });
  }
  res.render("app.ejs", { address: addresses });
});

router.get("/create_ad", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  res.render("create_ad.ejs", { address: addresses });
});

module.exports = router;
