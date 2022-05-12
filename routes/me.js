const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Address = require("../models/Address");
const { checkNotLogged } = require("../middleware/checkAuth");

router.get("/update", checkNotLogged, async (req, res) => {
  const user = await User.findOne({ where: { email: req.session.email } });
  const addresses = await Address.findAll();
  res.render("optUser.ejs", { userinfo: user.dataValues, address: addresses });
});

router.get("/logoff", checkNotLogged, (req, res) => {
  req.session.logged = false;
  res.redirect("/");
});
module.exports = router;
