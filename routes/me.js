const express = require("express");
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/User");
const adController = require("../controllers/Ad");
const Address = require("../models/Address");
const Ads = require("../models/Ad");
const { checkNotLogged } = require("../middleware/checkAuth");

router.get("/update", checkNotLogged, async (req, res) => {
  const user = await User.findOne({ where: { email: req.session.email }, include: [{ model: Address, required: true }] });
  const addresses = await Address.findAll();
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("me_update.ejs", { userinfo: user.dataValues, address: addresses, message: message });
  }
  res.render("me_update.ejs", { userinfo: user.dataValues, address: addresses });
});

router.get("/my_ads", checkNotLogged, async (req, res) => {
  const ads = await Ads.findAll({ include: [{ model: User, required: true, where: { email: req.session.email } }] });
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("my_ads.ejs", { userinfo: user.dataValues, message: message });
  }
  res.render("my_ads.ejs", { ads: ads });
});

router.get("/logoff", checkNotLogged, (req, res) => {
  req.session = null;
  res.redirect("/");
});

router.put("/update/update", userController.updateUser);
router.delete("/update/delete", userController.deleteUser);

router.delete("/my_ads/delete", adController.deleteAd);

module.exports = router;
