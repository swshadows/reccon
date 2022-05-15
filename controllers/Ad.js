const res = require("express/lib/response");
const Ad = require("../models/Ad");
const User = require("../models/User");

module.exports = {
  async listAllAds() {},

  async postAd(req, res) {
    let imgString;
    if (req.file) imgString = "/i/" + req.file.filename;
    else imgString = "/assets/Image-not-found.png";

    const currentUser = await User.findOne({ where: { email: req.session.email } });

    const ad = await Ad.create({
      title: req.body.title,
      description: req.body.description,
      image_path: imgString,
      fk_address: req.body.address,
      fk_user: currentUser.id,
    });

    req.session.message = { class: "success", text: "Anuncio postado com sucesso!" };
    res.redirect("/app");
  },
};
