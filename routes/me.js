const express = require("express");
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/User");
const Address = require("../models/Address");
const { checkNotLogged } = require("../middleware/checkAuth");

router.get("/update", checkNotLogged, async (req, res) => {
  const user = await User.findOne({ where: { email: req.session.email } });
  const addresses = await Address.findAll();
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("me_update.ejs", { userinfo: user.dataValues, address: addresses, message: message });
  }
  res.render("me_update.ejs", { userinfo: user.dataValues, address: addresses });
});

router.get("/logoff", checkNotLogged, (req, res) => {
  req.session = null;
  res.redirect("/");
});

router.post("/update/send", userController.updateUser);
module.exports = router;
