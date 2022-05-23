const express = require("express");
const router = express.Router();

const appController = require("../controllers/App");

router.get("/techs", appController.renderStaticTechs);
router.get("/FAQ", appController.renderStaticFAQ);
router.get("/team", appController.renderStaticTeam);
router.get("/info", appController.renderStaticInfo);

module.exports = router;
