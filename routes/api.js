const express = require("express");
const router = express.Router();
const { checkNotLogged } = require("../middleware/checkAuth");
const adController = require("../controllers/Ad");

router.get("/", checkNotLogged, adController.listAllAds);

module.exports = router;
