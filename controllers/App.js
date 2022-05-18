const Ad = require("../models/Ad");
const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
  // index.routes
  async renderIndex(req, res) {
    const message = setMessage(req);
    res.render("index.ejs", { logged: req.session.logged, message });
  },

  // me.routes
  async renderMeUpdate(req, res) {
    const user = await User.findOne({ where: { email: req.session.email }, include: [{ model: Address, required: true }] });
    const addresses = await Address.findAll();
    const message = setMessage(req);
    res.render("me_update.ejs", { userinfo: user.dataValues, address: addresses, message });
  },

  async renderMyAds(req, res) {
    const ads = await Ad.findAll({
      include: [
        { model: User, required: true, where: { email: req.session.email } },
        { model: Address, required: true },
      ],
    });
    const message = setMessage(req);
    res.render("my_ads.ejs", { ads: ads, message });
  },

  async redirectLogoff(req, res) {
    req.session = null;
    res.redirect("/");
  },

  async renderEditAd(req, res) {
    const ad = await Ad.findOne({ where: { id: req.query.id } });
    const address = await Address.findAll();
    const message = setMessage(req);
    res.render("edit_ad.ejs", { ad: ad.dataValues, address: address, message });
  },

  // app.routes
  async renderApp(req, res) {
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
    const message = setMessage(req);
    res.render("app.ejs", { address: addresses, ads: ads, message });
  },

  async renderCreateAd(req, res) {
    const addresses = await Address.findAll();
    const message = setMessage(req);
    res.render("create_ad.ejs", { address: addresses, message });
  },

  // forms.routes
  async renderSessionForms(req, res) {
    const addresses = await Address.findAll();
    const message = setMessage(req);
    res.render("forms.ejs", { address: addresses, message });
  },
};

function setMessage(req) {
  const message = req.session.message;
  if (req.session.message) {
    req.session.message = null;
  }
  return message;
}
