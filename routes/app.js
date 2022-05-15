const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
const Ad = require("../models/Ad");
const { checkNotLogged } = require("../middleware/checkAuth");
const User = require("../models/User");

router.get("/", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  const ads = await Ad.findAll({
    include: [
      {
        model: User,
        required: true,
      },
      {
        model: Address,
        required: true,
      },
    ],
  });
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("app.ejs", { address: addresses, message: message, ads: ads });
  }
  res.render("app.ejs", { address: addresses, ads: ads });
});

router.get("/create_ad", checkNotLogged, async (req, res) => {
  const addresses = await Address.findAll();
  res.render("create_ad.ejs", { address: addresses });
});

module.exports = router;
