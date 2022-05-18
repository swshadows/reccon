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
          where: { id: req.query.id },
        },
      ],
      attributes: ["title", "description", "image_path"],
    });
    res.json(ads);
  },

  async postAd(req, res) {
    let imgString;
    const acceptedFormats = [".png", ".webp", ".jpeg", ".jpg"];

    if (req.file) {
      imgString = "/i/" + req.file.filename;
      for (i in acceptedFormats) {
        if (path.extname(req.file.originalname) == acceptedFormats[i]) break;

        if (i >= acceptedFormats.length - 1) {
          req.session.message = { class: "danger", text: "ERRO: O formato do arquivo enviado é inválido, somente aceitamos os formatos .png, .jpeg, .jpg e .webp" };
          return res.redirect("/app/create_ad");
        }
      }
    } else imgString = "/assets/Image-not-found.png";

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

  async deleteAd(req, res) {
    const ad = await Ad.findOne({ where: { id: req.body.id } });
    await ad.destroy();

    req.session.message = { class: "success", text: "Anuncio apagado com sucesso" };
    res.redirect("/app");
  },
};
