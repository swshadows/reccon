const res = require("express/lib/response");
const Ad = require("../models/Ad");
const User = require("../models/User");
const path = require("path");
const Address = require("../models/Address");

module.exports = {
  async listAllAds(req, res) {
    const ads = await Ad.findAll({
      include: [
        {
          model: User,
          required: true,
          attributes: ["phone"],
        },
        {
          model: Address,
          required: true,
          attributes: ["name"],
          where: { name: req.query.name },
        },
      ],
      attributes: ["title", "description", "image_path"],
    });
    res.json(ads);
  },

  async postAd(req, res) {
    const validateImage = req.file.originalname;
    const acceptedFormats = [".png", ".webp", ".jpeg", ".jpg"];
    for (i in acceptedFormats) {
      if (i >= acceptedFormats.length) {
        req.session.message = { class: "danger", text: "ERRO: O formato do arquivo enviado é inválido, somente aceitamos os formatos .png, .jpeg, .jpg e .webp" };
        return res.redirect("/app/create_ad");
      }
      if (path.extname(validateImage) == acceptedFormats[i]) break;
    }

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
