const Ad = require("../models/Ad");
const User = require("../models/User");
const Address = require("../models/Address");

const path = require("path");
const fs = require("fs");

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
    const findAddress = await Address.findOne({ where: { id: req.body.id } });

    if (!req.body.title || req.body.title > 50) {
      req.session.message = { class: "danger", text: "ERRO: O titulo do anuncio está vazio ou passa de 50 caracteres" };
      return res.redirect("/app/create_ad");
    }

    if (!req.body.description || req.body.description > 200) {
      req.session.message = { class: "danger", text: "ERRO: A descrição do anuncio está vazia ou passa de 200 caracteres" };
      return res.redirect("/app/create_ad");
    }

    if (!req.body.address || !findAddress) {
      req.session.message = { class: "danger", text: "ERRO: Endereço vazio ou não encontrado, escolha um endereço" };
      return res.redirect("/app/create_ad");
    }

    const currentUser = await User.findOne({ where: { email: req.session.email } });
    let imageFormat = checkImageFormat(req);
    if (!imageFormat) {
      req.session.message = { class: "danger", text: "ERRO: O formato do arquivo enviado é inválido, somente aceitamos os formatos .png, .jpeg, .jpg e .webp" };
      return res.redirect("/app/create_ad");
    }
    const ad = await Ad.create({
      title: req.body.title,
      description: req.body.description,
      image_path: imageFormat,
      fk_address: req.body.address,
      fk_user: currentUser.id,
    });

    req.session.message = { class: "success", text: "Anuncio postado com sucesso!" };
    res.redirect("/app");
  },
  async updateAd(req, res) {
    const prevAd = await Ad.findOne({ where: { id: req.body.id } });
    const currentUser = await User.findOne({ where: { email: req.session.email } });
    const findAddress = await Address.findOne({ where: { id: req.body.id } });

    if (!req.body.title || req.body.title > 50) {
      req.session.message = { class: "danger", text: "ERRO: O titulo do anuncio está vazio ou passa de 50 caracteres" };
      return res.redirect("/app/create_ad");
    }

    if (!req.body.description || req.body.description > 200) {
      req.session.message = { class: "danger", text: "ERRO: A descrição do anuncio está vazia ou passa de 200 caracteres" };
      return res.redirect("/app/create_ad");
    }

    if (!req.body.address || !findAddress) {
      req.session.message = { class: "danger", text: "ERRO: Endereço vazio ou não encontrado, escolha um endereço" };
      return res.redirect("/app/create_ad");
    }

    let imageFormat = checkImageFormat(req);
    if (!imageFormat) {
      req.session.message = { class: "danger", text: "ERRO: O formato do arquivo enviado é inválido, somente aceitamos os formatos .png, .jpeg, .jpg e .webp" };
      return res.redirect("/me/my_ads");
    }

    const newAd = {
      title: req.body.title,
      description: req.body.description,
      image_path: imageFormat,
      fk_address: req.body.address,
      fk_user: currentUser.id,
    };
    if (prevAd.image_path != "/assets/Image-not-found.png")
      fs.unlink(`database${prevAd.image_path}`, (err) => {
        if (err) throw err;
      });

    await Ad.update(newAd, { where: { id: req.body.id } });
    req.session.message = { class: "success", text: "Anúncio atualizado com sucesso" };
    res.redirect("/me/my_ads");
  },

  async deleteAd(req, res) {
    const ad = await Ad.findOne({ where: { id: req.body.id } });
    if (ad.image_path != "/assets/Image-not-found.png")
      fs.unlink(`database${ad.image_path}`, (err) => {
        if (err) throw err;
      });
    await ad.destroy();

    req.session.message = { class: "success", text: "Anuncio apagado com sucesso" };
    res.redirect("/me/my_ads");
  },
};

function checkImageFormat(req) {
  let imgString;
  const acceptedFormats = [".png", ".webp", ".jpeg", ".jpg"];

  if (req.file) {
    imgString = "/img/" + req.file.filename;
    for (i in acceptedFormats) {
      if (path.extname(req.file.originalname) == acceptedFormats[i]) break;

      if (i >= acceptedFormats.length - 1) return (imgString = null);
    }
  } else imgString = "/assets/Image-not-found.png";
  return imgString;
}
