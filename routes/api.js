const express = require("express");
const router = express.Router();
const { checkNotLogged } = require("../middleware/checkAuth");
const Ads = require("../models/Ad");
const User = require("../models/User");
const Address = require("../models/Address");

router.get("/", checkNotLogged, async (req, res) => {
  const ads = await Ads.findAll({
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
});

module.exports = router;
